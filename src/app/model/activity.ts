export class ItemActivity {

    export: string;
    framework: Array<string>;
    name: Array<string>;
    check: Boolean;
    description: string;
 
}

export class Activity {

    id: string;
    name: Array<string>;
    activity: ItemActivity;

}