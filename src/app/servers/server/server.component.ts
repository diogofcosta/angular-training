import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(
    private serversService: ServersService,
    private currentRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    console.log(this.currentRoute.snapshot.params);
    this.server = this.serversService.getServer(+this.currentRoute.snapshot.params['id']);
    this.currentRoute.params.subscribe(
      (newParams: Params) => {
        console.log(newParams);
        this.server = this.serversService.getServer(+newParams['id']);
      }
    );
  }

  onEdit() {
    // this.router.navigate(['/servers', this.server.id, 'edit']); // a valid solution
    // another valid solution, we are at /servers/id... so if we set up relative to our current route and only add 'edit' we're fine!
    this.router.navigate(['edit'], {relativeTo: this.currentRoute, queryParamsHandling: 'preserve'});
  }
}
