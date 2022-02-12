"use strict"
if (HTMLFormElement.prototype.validation == undefined){
    HTMLFormElement.prototype.validation = function(options){

        
        if (!options.hasOwnProperty('rules')){
            console.log('No rules');
            return false;
        }

        //Biến form là đối tượng form đang được validation
        const form = this;

        //Dùng để lưu trữ các đối tượng cần validation khi submit
        const validationForm = [];
        
        //Function xử lý các rule validation check có pass k
        //Tham số truyền vào là tên trường, đối tượng element được querySelector bằng file name, danh sách các rule
        const test = function(fieldName,element,listRules){
            let err = [];
            //lọc qua danh sách các rule để lấy tên rule và đối số truyền vào
            listRules.forEach((r)=>{
                //rule có dạng tên rule : đối số
                let rule = (r.includes(':')) ?  r.split(':') : r;

                let nameRule = Array.isArray(rule) ? rule.shift() : rule ;
   
                if (functionValidate.hasOwnProperty(nameRule))
                {
                    //thực hiện check bằng việc get hàm trong object functionValidate
                    if (!functionValidate[nameRule](element,...rule))
                    {
                        //Nếu có lỗi thì lấy mess được người dùng truyền vào hoặc default mess
                        let mess = messages[fieldName + '.' + nameRule] || defaultMessage[nameRule](fieldName,...rule);
                        //push error vào biến err
                        err.push({ mess : mess, rule : nameRule}); 
                    }
                }
            });
            
            return (err.length> 0) ? [fieldName,element,err] : false;
        }

        //Biến lưu các rule dùng để validaiton
        const functionValidate = {
            //Yêu cầu nhập
            required(input){

                return typeInput(input.type,
                    (form.querySelector('[name="'+input.name+'"]:checked')),
                    (input.value.trim().length > 0),
                    (input.value.trim().length > 0) 
                );

            },
            //Trường phải là Email
            email(input){
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value.trim());
            },
            //độ dài tối thiểu của chuỗi
            minLength(input,minLength){
                return (input.value.trim().length >= minLength);
            },
            //So sánh giá trị với trường khác
            same(input,fieldValidate){
                
                let sameValidation = form.querySelector('[name="'+fieldValidate.trim()+'"]') || form.querySelector(fieldValidate.trim()) || console.log('Không tồn tại ' + fieldValidate);
                
                return (input.value.trim() === sameValidation.value);
            },
            //Đuôi file
            mimes(input,extend){
                if (input.value !== ''){
                    extend = extend.split(',');
                    let extension = input.files[0].name.split('.').pop();
                    return extend.includes(extension);
                }
                return false;
            }
        }
        //Biến lưu các message mặc định return khi có lỗi
        const defaultMessage = {
            required(e){
                return 'Bạn chưa nhập trường ' + e;
            },
            email(e){
                return `Trường ${e} phải là email`;
            },
            minLength(e,minLength){
                return `Trường ${e} phải có ít nhất ${minLength} ký tự`;
            },
            same(e,fieldValidate){
                return `Trường ${e} và trường ${fieldValidate} không trùng nhau`;
            },
            mimes(e,extend){
                return `Trường ${e} phải có đuôi là một trong số sau: ${extend}`;
            }

        }

        //Hàm get function để hiện thị lỗi, nếu k có thì dùng mặc định
        let displayErr = options.displayError || function(element,err){
            alert(err.join('\n'));
        }

        //Hàm được thực thi khi submit
        let submitFunc = options.submitFunc || function(){form.submit()}; 

        //Biến chưa các message hiển thị lỗi do người dùng set
        const messages = options.hasOwnProperty('messages') && options.messages;

        //Biến chứa các hàm để set Event cho các đối tượng Input
        const eventFunction = {
            //Hàm set Event
            setEvent(){
                const rules = options.rules;
  
                Object.keys(rules).forEach((e) => {
                     let elements;
         
                     try{
                         elements =  form.querySelectorAll('[name="'+e+'"]') ;
                         if (elements.length == 0){
                             elements =  form.querySelectorAll(e) ;
                             if (elements.length == 0) throw new Error();
                         }
                     }
                     catch(error){
                         console.log('Không tồn tại Element '+ e);
                         elements = null;
                     }
         
                     if (elements && elements.length > 0){
                        let listRules = Array.isArray(rules[e]) ?  rules[e] : Array(rules[e]);

                        Array.from(elements).forEach((element)=>{
                            let func  = typeInput(element.type,this.click,this.change,this.blur);
                            validationForm.push([e,element,listRules]);
                            func(e,element,listRules);
                        });
                     }
                });
            },
            //Hàm set event blur
            blur(fieldName,element,listRules){
                element.onblur = ()=>{
                    eventFunction.execute(fieldName,element,listRules);
                }
  
            },
            //Hàm set Event Click
            click(fieldName,element,listRules){
                element.onclick = ()=>{
                    eventFunction.execute(fieldName,element,listRules);
                }
            },
            //Hàm set Event change
            change(fieldName,element,listRules){
                element.onchange = ()=>{
                    eventFunction.execute(fieldName,element,listRules);
                }
            },
            execute(fieldName,element,listRules){
                let err = test(fieldName,element,listRules);
                    if (err)
                        setTimeout(function(){displayErr(err)});
            }
        }
        //chạy hàm set Event để lọc qua và set event cho trường input
        eventFunction.setEvent();

        //sự kiện khi submit
        form.onsubmit = function(event){

            event.preventDefault();
            let err = [];

            validationForm.forEach((e,i)=>{
                let check = test(...e);
                if (check)
                    err.push(check);
            })
            
            let formData = new FormData(this);

            if (err.length > 0)
                displayErr(err,true);
            else
                submitFunc();
        }
    }
}

//Hàm hiện thị lỗi dưới chân các input
function displayUnderInput(error,isSubmit = false){
    function displayError(element,err){
        let errElement = element.parentElement.querySelector('.form-message');
        let er = err[0];
        errElement.innerText = er.mess;
    
        element.parentElement.classList.add('invalid');
    
        let eventRemoveInvalid = typeInput(element.type,'click','change','input');
                
        element.addEventListener(eventRemoveInvalid,
            function(){
                element.parentElement.classList.remove('invalid');
                errElement.innerText = '';
            });
    }

    if (isSubmit){
        error.forEach((e)=>{
            let element,err;
            [,element,err] = e;
            displayError(element,err);
        })
    }
    else{
        let element,err;
        [,element,err] = error;
        displayError(element,err);
    }
}

//Hàm hiển thị lỗi bằng toast, yêu cầu phải nhúng file toast.js và file css
function displayToast(error,isSubmit = false){

    if (isSubmit){
        let listMessage = error.reduce((a,e)=>{
            let fieldName,element,err;

            [fieldName,element,err] = e;
            if (err.length > 0){
                element.parentElement.classList.add('invalid');

                let eventRemoveInvalid = typeInput(element.type,'click','change','input');
                
                element.addEventListener(eventRemoveInvalid,function(){element.parentElement.classList.remove('invalid')});

                a = [...a,...(err.map((e)=> {
                    return {[fieldName+'.'+e.rule]: e.mess}
                }))];
               
            }
            return a;
        },[]);
        let message = listMessage.reduce((a,e)=>{
            return Object.assign(a,e);
        },{})

        toast({
            title : 'Error',
            message : Object.values(message).join('<br/>'),
            type : 'error',
            duration : Object.values(message).length*1500
        });
    }
    else{
        if (error){
            let element,err;
            [,element,err] = error;
            
            if (err.length > 0){
                err = err.map((e)=> e.mess);
                toast({
                    title : 'Error',
                    message : err.join('<br/>'),
                    type : 'error',
                    duration : 5000
                });
                element.parentElement.classList.add('invalid');

                let eventRemoveInvalid = typeInput(element.type,'click','change','input');
                
                element.addEventListener(eventRemoveInvalid,function(){element.parentElement.classList.remove('invalid')});
            }
        }
    }
}


function sValidation(formId,options){
    const form = document.querySelector(formId);

    form.validation(options);
}

const typeInput = function(typeInput,...returnValue){
    typeInput = typeInput.toUpperCase();

    const type = [
        ['RADIO','CHECKBOX'],
        ['SELECT-ONE','FILE']
    ]

    for (let i =0 ; i < type.length;i++)
        if (type[i].includes(typeInput)){
            return returnValue[i];
        }

    return returnValue.pop();
}