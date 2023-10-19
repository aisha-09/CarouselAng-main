import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'carousal';

  images = [
    {
      imageSrc:
        'https://images.pexels.com/photos/18235303/pexels-photo-18235303/free-photo-of-autumn-s-reflection.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      imageAlt: 'nature1',
    },
    {
      imageSrc:
        'https://images.pexels.com/photos/18696922/pexels-photo-18696922/free-photo-of-geyser.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      imageAlt: 'nature2',
    },
    {
      imageSrc:
        'https://images.pexels.com/photos/9367323/pexels-photo-9367323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      imageAlt: 'person1',
    },
    {
      imageSrc:
        'https://images.pexels.com/photos/1341277/pexels-photo-1341277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      imageAlt: 'person2',
    },
  
    
  ]
}
