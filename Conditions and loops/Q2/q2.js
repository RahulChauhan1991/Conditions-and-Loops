const grade=function (marks){
    if(marks>90){
        return "A";
    }else if(marks>70&&marks<90){
        return "B";
    }else if(marks>50 && marks<70){
        return "C";
    }else if(marks<50){
        return "F";
    }
}
console.log(grade(65));

