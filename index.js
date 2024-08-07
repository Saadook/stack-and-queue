class Stack{
    constructor(){
this.list = []
    }

addEle(item){
this.list.push(item)
}
removeele(){
this.list.pop()
}
peek(){
//return the next item to be delted
return this.list[this.list.length-1]
}

}


var stack1 = new Stack()
stack1.addEle('fzbf')
stack1.removeele()


class queue {
constructor(){
    this.list=[]
}
addEle(item){
this.list.push(item)
}
removeele(){
    this.list.pop
}
peek (){
    return this.list[this.length-1]
}
}