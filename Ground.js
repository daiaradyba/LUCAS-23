class Ground{
//COMO É O NOSSO OBJETO = PROPRIEDADES. SE ELE É UMA SPRITE OU CORPO, O TAMANHO, A COR...
    constructor(){
        var ground_options ={
            isStatic: true
    
        }
        this.body = Bodies.rectangle(200,390,200,20,ground_options);
        World.add(world,this.body);
    
    }
//FUNÇÕES 

display(){
    rectMode(CENTER);
    rect(this.body.position.x,this.body.position.y,400,20);
}



}