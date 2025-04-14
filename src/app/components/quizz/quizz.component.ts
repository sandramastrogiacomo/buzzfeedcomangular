import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {
  title = 'Descubra qual linguagem combina com você!';
  questions = [
    {
      question: 'Qual seu estilo de trabalho?',
      options: [
        { name: 'Prático e direto ao ponto', alias: 'A' },
        { name: 'Criativo e visual', alias: 'B' },
        { name: 'Analítico e curioso', alias: 'C' }
      ]
    },
    {
      question: 'Qual café você escolheria para programar?',
      options: [
        { name: 'Expresso forte', alias: 'A' },
        { name: 'Latte com espuma', alias: 'B' },
        { name: 'Chá com limão', alias: 'C' }
      ]
    },
    {
      question: 'Qual seu emoji favorito?',
      options: [
        { name: '💻', alias: 'A' },
        { name: '🎨', alias: 'B' },
        { name: '🧠', alias: 'C' }
      ]
    }
  ];

  questionSelected: any;
  questionIndex = 0;
  finished = false;
  answers: string[] = [];
  answerSelected = '';

  ngOnInit(): void {
    this.setCurrentQuestion();
  }

  setCurrentQuestion(): void {
    this.questionSelected = this.questions[this.questionIndex];
  }

  playerChoose(alias: string): void {
    this.answers.push(alias);
    this.nextStep();
  }

  nextStep(): void {
    this.questionIndex++;
    if (this.questionIndex < this.questions.length) {
      this.setCurrentQuestion();
    } else {
      this.finished = true;
      this.checkResult();
    }
  }

  checkResult(): void {
    const resultado = this.answers.reduce((acc: any, curr: string) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {});

    const maisFrequente = Object.entries(resultado).sort((a, b) => b[1] as number - (a[1] as number))[0][0];

    switch (maisFrequente) {
      case 'A':
        this.answerSelected = '💻 <b>Você é Java</b>: estruturada, confiável e poderosa. Gosta de regras, estabilidade e performance!';
        break;
      case 'B':
        this.answerSelected = '🎨 <b>Você é JavaScript</b>: criativa, dinâmica e cheia de ideias. Gosta de inovação e de transformar interfaces!';
        break;
      case 'C':
        this.answerSelected = '🧠 <b>Você é Python</b>: prática, elegante e focada em soluções inteligentes. Adora automatizar tudo!';
        break;
    }
  }

  restartQuiz(): void {
    this.finished = false;
    this.answers = [];
    this.questionIndex = 0;
    this.setCurrentQuestion();
  }
}
