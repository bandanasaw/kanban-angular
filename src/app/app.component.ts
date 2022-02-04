import { Component } from "@angular/core";

@Component({
    selector: 'my-app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class MyAppRootComponent {


    cards: Array<string> = ['New Task', 'On Hold', 'In Progress', 'Done'];
    cards1: any[] = [
        {
            status: 'New Task',
            info: [
                { name: 'Test the project', dueDate: 'Sun Mar 19 2017', priority: 3 },
                { name: 'Send the project by 4pm', dueDate: 'Sun Mar 19 2017', priority: 1 }


            ]
        },
        {
            status: 'On Hold',
            info: [
                { name: 'Modifiy the datepicker', dueDate: 'Sun Mar 19 2017', priority: 5 },
                { name: 'Modifiy the date formate', dueDate: 'Sun Mar 19 2017', priority: 5 },
                { name: 'Validation of Task Form', dueDate: 'Sun Mar 19 2017', priority: 5 },
                { name: 'sorting of Task list', dueDate: 'Sun Mar 19 2017', priority: 5 },
                { name: 'Comment the code lines', dueDate: 'Sun Mar 19 2017', priority: 5 }



            ]
        },
        {
            status: "In Progress",
            info: [
                { "name": "Test the Task Edit Menu", "dueDate": "Sun Mar 19 2017", "priority": 3 },
                { "name": "Create the List Edit Menu", "dueDate": "Sun Mar 19 2017", "priority": 3 },
                { "name": "Test the List Edit Menu", "dueDate": "Sun Mar 19 2017", "priority": 3 }
            ]
        },

        {
            status: 'Done',
            info: [
                { name: 'Understand the requirement', dueDate: 'Fri Mar 17 2017', priority: 1 },
                { name: 'Create the design', dueDate: 'Sat Mar 18 2017', priority: 1 },
                { name: 'Start the project structure', dueDate: 'Sat Mar 18 2017', priority: 1 },
                { name: 'Start Writing the code', dueDate: 'Sat Mar 18 2017', priority: 2 },
                { name: 'Create the header section', dueDate: 'Sat Mar 18 2017', priority: 3 },
                { name: 'Test the List section', dueDate: 'Sat Mar 18 2017', priority: 3, },
                { name: 'Create the Task section', dueDate: 'Sat Mar 18 2017', priority: 3 },
                { name: 'Create the Task Edit Menu', dueDate: 'Sat Mar 18 2017', priority: 3 },
                { name: 'Create the List Edit Menu', dueDate: 'Sun Mar 19 2017', priority: 3 },
                { name: 'Test the List Edit Menu', dueDate: 'Sun Mar 19 2017', priority: 3 }
            ]
        },
       



    ]


    onAdded(name: string): void {
        console.log(name, ' I am from app component');
        this.cards1.push(
            {
                status: name,
                info: [

                ]
            }
        )
    }

}

