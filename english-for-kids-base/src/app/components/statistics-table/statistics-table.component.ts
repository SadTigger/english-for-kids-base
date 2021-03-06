import { Component } from '@angular/core';
import { Sort } from '@angular/material/sort';

export interface WordTrainStatistics {
  categories: string;
  word: string;
  translation: string;
  trained: number;
  correct: number;
  incorrect: number;
  percentage: string;
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

const enum TableHeaders {
  categories = 'categories',
  word = 'word',
  translation = 'translation',
  trained = 'trained',
  correct = 'correct',
  incorrect = 'incorrect',
  percentage = 'percentage',
}

@Component({
  selector: 'app-statistics-table',
  templateUrl: './statistics-table.component.html',
  styleUrls: ['./statistics-table.component.scss'],
})
export class StatisticsTableComponent {
  STATISTICS_DATA: WordTrainStatistics[] = [
    {
      categories: 'toys', word: 'doll', translation: 'кукла', trained: 0, correct: 0, incorrect: 0, percentage: '0%',
    },
    {
      categories: 'toys', word: 'ball', translation: 'мяч', trained: 10, correct: 8, incorrect: 2, percentage: '80%',
    },
    {
      categories: 'family', word: 'mother', translation: 'мама', trained: 20, correct: 10, incorrect: 10, percentage: '50%',
    },
    {
      categories: 'family', word: 'father', translation: 'папа', trained: 0, correct: 0, incorrect: 0, percentage: '0%',
    },
  ];

  sortedData: WordTrainStatistics[];

  displayedColumns: string[] = ['categories', 'word', 'translation', 'trained', 'correct', 'incorrect', 'percentage'];

  constructor() {
    this.sortedData = this.STATISTICS_DATA.slice();
  }

  sortData(sort: Sort): void {
    const data = this.STATISTICS_DATA.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case TableHeaders.categories: return compare(a.categories, b.categories, isAsc);
        case TableHeaders.word: return compare(a.word, b.word, isAsc);
        case TableHeaders.translation: return compare(a.translation, b.translation, isAsc);
        case TableHeaders.trained: return compare(a.trained, b.trained, isAsc);
        case TableHeaders.correct: return compare(a.correct, b.correct, isAsc);
        case TableHeaders.incorrect: return compare(a.incorrect, b.incorrect, isAsc);
        case TableHeaders.percentage: return compare(a.percentage, b.percentage, isAsc);
        default: return 0;
      }
    });
  }
}
