import { Component } from '@angular/core';
import { DialogService } from './dialog/dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'machineTest';
  all: string[] = [];
  expected_arr: any;
 

  constructor(private dialogService : DialogService) { }

  ngOnInit(): void {
    this.sort_band_arr();
  }
  sort_band_arr() {
    
    //sort the given band array 
    const expected :any = {
      members: {
        current: [
          { name: 'Sascha', age: 59, plays: ['vocals', 'synth', 'guitar', 'bass'] },
          { name: 'Lucia', age: 49, plays: ['vocals', 'synth'] },
          { name: 'Jules', age: 53, plays: ['guitar', 'bass', 'synth'] },
          { name: 'Steve', age: 55, plays: ['guitar'] }
        ],
        past: [
          { name: 'Raymond', age: 57, plays: ['vocals', 'synth'] },
          { name: 'En', age: 52, plays: ['vocals', 'drums', 'guitar', 'synth'] },
          { name: 'Gunter', age: 57, plays: ['guitar', 'synth'] }
        ]
      }
    };
// sorting by age,name
   const members_arr = expected .members.current.concat(expected .members.past) ;
   const sorted_by_age= members_arr.sort((a:any,b:any) =>  a.age < b.age ? 1 : a.age > b.age ? -1 : 0);
   const sorted_by_name = sorted_by_age.sort((a:any,b:any) => a.name.localeCompare(b.name));
   const all_array = sorted_by_name.map((a:any) => a.name.toLowerCase());
 // create new prop under expected
    var plays_obj:any = {};
    for(var item in expected .members) {
        console.log(item)

        expected .members[item].forEach((res:any)=>{
            res.plays.forEach((obj:any)=>{
              
                if(!plays_obj[obj]) {
                    plays_obj[obj] = [res.name.toLowerCase()]
                }else {
                    plays_obj[obj].push(res.name.toLowerCase())
                }
            })
        })

    }
    expected .members['all'] = all_array;
    expected ['plays'] = plays_obj;
    this.expected_arr = expected;
    console.log(expected );

  }

  ///////TASK 2/////////////////////////

  showDialog(){
    this.dialogService.openDialog(
      {
        title :'Welcome !',
        body :'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      }
    ).then(result =>{

    },()  =>{

    });
  }
}
