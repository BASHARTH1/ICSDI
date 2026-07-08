import { Component } from '@angular/core';

interface Speaker {
  name: string;
  role: string;
  org: string;
  photo: string;
  bio: string;
  accent: string;
}

@Component({
  selector: 'app-speakers',
  standalone: true,
  templateUrl: './speakers.html',
  styleUrl: './speakers.css'
})
export class SpeakersComponent {
  protected readonly speakers: Speaker[] = [
    {
      name: 'Dr. Christina Georgantopoulou',
      role: 'Dean of Engineering',
      org: 'Bahrain Polytechnic, Kingdom of Bahrain',
      photo: 'img/christina.png',
      bio: 'A Professional Mechanical Engineer with a PhD in Computational Fluid Dynamics from the National Technical University of Athens and a Senior Fellow of the HEA. With over 25 years in higher education, her research spans academic leadership, engineering education quality, industrial flow modelling and clean-energy applications.',
      accent: '#047857'
    },
    {
      name: 'Dr. Amal Shaheen',
      role: 'HR Director',
      org: 'Bahrain Polytechnic',
      photo: 'img/amal.png',
      bio: 'An AI Transformation Strategy Leader and expert in Machine Learning and Big Data Analytics with 25+ years in government IT and digitalization. She holds a PhD in Computing and Information Science, bridging academic research with real-world impact across AI consultancy, digital strategy and data-driven transformation.',
      accent: '#0891b2'
    },
    {
      name: 'Dr. Mohammad Ghaleeh',
      role: 'Senior Lecturer & Deputy Head of Engineering',
      org: 'University of Northampton, UK',
      photo: 'img/mohammad.png',
      bio: 'Senior Lecturer and Deputy Head of Engineering at the University of Northampton, UK. He has published extensively in leading international journals and actively contributes to research and innovation in engineering and sustainable technologies.',
      accent: '#ea580c'
    }
  ];
}
