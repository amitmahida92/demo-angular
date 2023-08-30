import { Component } from '@angular/core';
import { ConfService } from 'src/app/config.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  version = ConfService.version();

}
