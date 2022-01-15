interface validationConfig{
    [property:string]:{
        [validationProperty:string]:string[];
    };
 }
 //global variable for interface
 const validationObj1 : validationConfig={}
 //create a function for required and positive
 function Required1(target:any ,name :string)
 {
     console.log(target)
     const className =target.constructor.name;
     //retrieving all properties name in an array
     validationObj[className]={
         ...validationObj[className],[name]:['required'],
     };
     console.log(validationObj);
 }
 
 function positive1(target:any ,name :string)
 {
     console.log(target)
     const className =target.constructor.name;
     //retrieving all properties name in an array
     validationObj[className]={
         ...validationObj[className],[name]:['positive'],
     };
     console.log(validationObj);
 }
 
 
 // 7 create a function to implement validation
 function validate(obj:any){
     let validatorName = validationObj[obj.constructor.name];
     console.log(validatorName);
     
     if(!validatorName){
         return true;
 
     };
     let isvalid  = true;
     for (const prop in validatorName){
         console.log(prop);
         for(const validator of validatorName[prop]){
             console.log(validator);
             switch(validator){
                 case 'required':
                     isvalid=isvalid && !!obj[prop];
                     break;
                     case 'positive':
                         isvalid=obj[prop]>0;
                         break;
             }
         }
     }
 }
 
 
 class product{
     //property decorator
     @Required
    product_name :string;
     @Required
     qty : number;
 
     constructor(_product_name :string,_qty:number){
         this.product_name=_product_name;
         this.qty=_qty;
     }
 }
 const form1 =document.querySelector('form')!;
 form.addEventListener('submit',(event)=>{
     event.preventDefault();
     //get all elemnets
     const product_nameElement = document.getElementById('pn') as HTMLInputElement;
     const qtyElement = document.getElementById('qty') as HTMLInputElement;
 
     //VAue from elements
     const product_name =product_nameElement.value;
     const qty= + qtyElement.value;
 
     //create an object of course----new course() constructor
     const productObj = new product(product_name, qty);
     //validate()
     // 6 create a validate function for error msg
     if(!validate(productObj))
     {
         alert("input value not valid");
         return;
     }
     
     console.log(productObj);
 })
 