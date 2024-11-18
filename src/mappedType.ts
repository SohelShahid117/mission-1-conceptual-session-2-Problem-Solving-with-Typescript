{
    //mapped type

    type ToDo = {
        task : string;
        isCompleted : boolean;
        dueDate : string
    }

    //now enjoy mapped in type by mapping
    type OptionalToDo = {
        //akane type k mapping kora hoyeche in keyof use kore 
        // [T in keyof ToDo] : ToDo[T];
        [T in keyof ToDo]? : ToDo[T];

        //here T = task ,isCompleted,dueDate
    }

    const requiredToDo:ToDo = {
        task :"assignment-1 for Next Level Developer",
        isCompleted:false,
        dueDate:"20-11-2024"
        //akane sobolo property add kortei hobe nahoi lal batti dekabe
    }

    const requiredToDo2:OptionalToDo={
        task:"ami assignment-1 valovabe korbo"
        //akane sobolo property add koro || na koro no problm
    }







}