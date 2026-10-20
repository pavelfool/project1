import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { publicDecrypt } from 'node:crypto';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('lesson1');
  public name : string = "Kirklaaaaa";

  public words: string = ""; // переменная в тайп скрипте
public getWord(): void { 
    const input = document.getElementById("input") as HTMLInputElement; //связіваем штмл и тайп скрипт
    this.words = input.value; // передаем в переменную тайп скрипта всю вместимость нашего поля в штмл
}

public textArea: string = ""; // переменная для текстовой области
public getTextArea(): void { 
    const input = document.getElementById("textArea") as HTMLTextAreaElement; //связіваем штмл и тайп скрипт
    this.textArea = input.value; // передаем в переменную тайп скрипта всю вместимость нашего поля в штмл
}

public badWord: string[] = []; // массивчик
public getBadWord(): void {
    const input = document.getElementById("BadWord") as HTMLInputElement;
    this.badWord = [input.value]; // передаем в переменную тайп скрипта всю вместимость нашего поля в штмl
}

public getAdd(add: HTMLButtonElement): void {
  const input = document.getElementById("input") as HTMLInputElement;
  this.getWord(); // візіваем функцию getWord() для получения значения из input
if(this.words !== ""){ 
  this.badWord.push(this.words); // добавляем значение в массив badWord
   this.badWord
this.words = ""; // чистим поле ввода
input.value = ""; // чистим поле ввода
}
else if(this.words === ""){
    const input = document.getElementById("input") as HTMLInputElement; //связіваем штмл и тайп скрипт
    input.placeholder = "Please write a word!"; // если поле пустое, то выводим сообщение
    input.style.border = "2px solid red"; // красим рамку в красный цвет
}
 if(this.badWord.length > 0){
    const input = document.getElementById("input") as HTMLInputElement;
    input.style.border = "2px solid rgb(192, 192, 192)"; // возвращаем рамку в исходное состояние
    input.placeholder = "word here..."; // возвращаем placeholder в исходное состояние
}
}

public getRes(reset: HTMLButtonElement): void {
    const input = document.getElementById("input") as HTMLInputElement;
  this.getWord(); // візіваем функцию getWord() для получения значения из input
  this.badWord = []; // очищаем массив badWord
this.words = ""; // чистим поле ввода
this.textArea = ""; // чистим поле ввода
const textArea = document.getElementById("textArea") as HTMLTextAreaElement;
textArea.value = ""; // чистим поле ввода
input.value = ""; // чистим поле ввода
input.placeholder = "word here..."; // возвращаем placeholder в исходное состояние
input.style.border = "1px solid rgb(192, 192, 192)"; // возвращаем рамку в исходное состояние
}

public getCenzor(cenzor: HTMLButtonElement): void {
  const input = document.getElementById("textArea") as HTMLTextAreaElement;
  this.badWord.forEach((value) => { // перебираем массив badWord
if(input.value.includes(value)){ // если в текстовой области есть запрещённое слово
input.value = input.value.replaceAll(value, '***'); // заменяем запрещённое слово на ***
}
})
}


}

