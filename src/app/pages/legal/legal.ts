import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-legal',
  standalone: true,
  imports: [CommonModule, RouterModule], // Assure-toi que CommonModule et RouterModule sont ici
  templateUrl: './legal.html',
  styleUrls: ['./legal.scss']
})
export class LegalComponent implements OnInit {
  // Le contenu de la classe peut être vide si tu n'as pas de logique
  constructor() {}
  ngOnInit(): void {}
}