
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SLL{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value){// appends at last

        let newNode = new Node(value);
        if(this.head == null){
            this.head = newNode;
            this.tail = this.head;
        }else{
            
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    pop(){ // Removes from last and return the item
        if(!this.head) return undefined;
        let traverseObj = this.head;
        let pre = this.head;
        while(traverseObj.next != null){
            pre = traverseObj;
            traverseObj = traverseObj.next;
        }
        let popItem = traverseObj;
        pre.next = null;
        this.tail = pre;
        this.length--;
        if(this.length == 0){
            this.head = null;
            this.tail = null;
        }
        return popItem;
    }

    shift(){// removes first item and return it.
        if(!this.head) return undefined;
        var removingItem = this.head;
        this.head = this.head.next;
        this.length--;
        if(this.length == 0){
            this.tail = null;
        }
        return removingItem;
    }

    unshift(value){ // add element at the begining

        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(lookupIndex){// returns the item at index accepts from 0

        if(!this.head || lookupIndex > this.length || lookupIndex < 0) return null;
        
        let traverseIndex = 0;
        var traverseObj = this.head;
        while(traverseIndex < lookupIndex ){
            traverseObj = traverseObj.next;
            traverseIndex++;
        }
        return traverseObj;
    }

    set(index, value){
        let foundItem = this.get(index);
        if(foundItem){
            foundItem.value = value;
            return true;
        }
        return false;
    }


    insertAt(indexToInsert, value){
        if(!this.head || indexToInsert > this.length || indexToInsert < 0) return false;

        if(indexToInsert == 0) this.unshift(value);
        else if(indexToInsert == this.length) this.push(value);
        else{
            let prevItem = this.get(indexToInsert - 1);
            let nextItem = this.get(indexToInsert);
            let newNode = new Node(value);
            prevItem.next = newNode;
            newNode.next = nextItem;
            this.length++;
        }
        return true;

    }

    remove(removeIndex){
        if(!this.head || removeIndex < 0 || removeIndex >= this.length) return null;
        if(removeIndex == this.length - 1) return this.pop();
        if(removeIndex == 0) return this.shift();

        let prevItem = this.get(removeIndex - 1);
        let currentItem = prevItem.next;
        let nextItem = currentItem.next;
        
        prevItem.next = nextItem;
        this.length--;
        return currentItem;
    }

    reverse(){
        if(!this.head) return null;
        if(this.length == 1) return this;
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
        for(let i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;       
    }

    traverse(){
        if(!this.head) return "";
        let traverseObj = this.head;

        while(traverseObj.next != null){
            console.log(traverseObj.value);
            traverseObj = traverseObj.next;
        }
        console.log(traverseObj.value);
        console.log("=".repeat(10));
    }
}

let list = new SLL();
list.push("Surveer");
list.push("Amit");
///print(list.pop());
//print(list.pop());
//list.shift();
//list.shift();

list.unshift("Ashish");
list.unshift("debarsi");
//list.push("Ashish");
//list.push("debarsi");



//list.insertAt(2, "Prabhat");
//list.insertAt(0, "Himu");

list.push("Prabhat");
list.push("Himu");
list.traverse();
list.reverse();
list.traverse()
//print(list);


function print(...arr){
    console.log(arr);
}