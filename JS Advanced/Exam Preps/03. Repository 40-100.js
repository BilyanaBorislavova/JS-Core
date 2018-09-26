class Repository{
    constructor(props){
        this.validateObject = props;
        this.data = new Map();
        this.id = 0;
    }

    add(entity){
        let values = Object.values(this.validateObject);
        let entityValues = Object.values(entity);

   for (let property of Object.keys(entity)){
       if(!this.validateObject.hasOwnProperty(property)){
           throw new Error(`Property ${property} is missing from the entity!`)
       }
   }

   for (let i = 0; i < entityValues.length; i++) {
           if(typeof entityValues[i] !== values[i]){
               throw new Error(`Property ${entityValues[i]} is of incorrect type!`)
           }
   }
        this.data.set(this.id, entity);
        this.data++;

        return this;
    }

  update(id, entity){
      if(!this.data.has(id)){
          throw new Error(`Entity with id: ${id} does not exist!`)
      }

     let values = Object.values(this.validateObject);
     let entityValues = Object.values(entity);
     for (let property of Object.keys(entity)){
         if(!this.validateObject.hasOwnProperty(property)){
             throw new Error(`Property ${property} is missing from the entity!`)
         }
     }

     for (let i = 0; i < entityValues.length; i++) {
         if(typeof entityValues[i] !== values[i]){
             throw new Error(`Property ${entityValues[i]} is of incorrect type!`)
         }
     }
      this.data[id] = entity;
  }

  del(id){
      if(!this.data.has(id)){
          throw new Error(`Entity with id: ${id} does not exist!`)
      }
      this.data.delete(id);
  }

  get count(){
      return Object.keys(this.data).length;
  }

   get(id){
     if(!this.data.has(id)){
         throw new Error(`Entity with id: ${id} does not exist!`)
     }

       return this.data.get(id);
   }
}
let repo = new Repository();
let props = {
    name: "string",
    age: "number"
};

let e1 = {
    name: "Pesho",
    age: 21
};

repo.add(e1);

