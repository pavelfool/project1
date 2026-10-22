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
  public name: string = "Kirklaaaaa";

  public words: string = "";
  public getWord(): void {
    const input = document.getElementById("input") as HTMLInputElement;
    this.words = input.value;
  }

  public textArea: string = "";
  public getTextArea(): void {
    const input = document.getElementById("textArea") as HTMLTextAreaElement;
    this.textArea = input.value;
  }

  public badWord: string[] = [];
  public getBadWord(): void {
    const input = document.getElementById("BadWord") as HTMLInputElement;
    this.badWord = [input.value];
  }

  public getAdd(add: HTMLButtonElement): void {
    const input = document.getElementById("input") as HTMLInputElement;
    this.getWord();
    if (this.words !== "") {
      this.badWord.push(this.words);
      this.badWord
      this.words = "";
      input.value = "";
    }
    else if (this.words === "") {
      const input = document.getElementById("input") as HTMLInputElement;
      input.placeholder = "Please write a word!";
      input.style.border = "2px solid red";
    }
    if (this.badWord.length > 0) {
      const input = document.getElementById("input") as HTMLInputElement;
      input.style.border = "2px solid rgb(192, 192, 192)";
      input.placeholder = "word here...";
    }
  }

  public getRes(reset: HTMLButtonElement): void {
    const input = document.getElementById("input") as HTMLInputElement;
    this.getWord();
    this.badWord = [];
    this.words = "";
    this.textArea = "";
    const textArea = document.getElementById("textArea") as HTMLTextAreaElement;
    textArea.value = "";
    input.value = "";
    input.placeholder = "word here...";
    input.style.border = "1px solid rgb(192, 192, 192)";
  }

  public getCenzor(cenzor: HTMLButtonElement): void {
    const input = document.getElementById("textArea") as HTMLTextAreaElement;
    this.badWord.forEach((value) => {
      if (input.value.includes(value)) {
        input.value = input.value.replaceAll(value, '***');
      }
    })
  }
}

