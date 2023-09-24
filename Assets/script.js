function displayDates(){
    let today = new Date();
    let options = {year:'numeric',month:'short',day:'numeric'};
    let formattedDate = today.toLocaleDateString(undefined,options);

    // For today's Date
    document.getElementById('today').innerHTML = formattedDate;
    

    // For minus 7's date *******************************************
    let minus7 = new Date(today);
    minus7.setDate(today.getDate() - 7);
    let today7 = minus7.toLocaleDateString(undefined,options);

    document.getElementById('today7').innerHTML = today7;

    // For minus 14's date *********************************************
    let minus14 = new Date(today);
    minus14.setDate(today.getDate() - 14);
    let today14 = minus14.toLocaleDateString(undefined,options);

    document.getElementById('today14').innerHTML = today14;

    // For minus 21's date ********************************************
    let minus21 = new Date(today);
    minus21.setDate(today.getDate()-21);
    let today21 = minus21.toLocaleDateString(undefined,options);

    document.getElementById('today21').innerHTML = today21;

    // For minus 28's date *******************************************
    let minus28 = new Date(today);
    minus28.setDate(today.getDate() - 28);
    let today28 = minus28.toLocaleDateString(undefined,options);

    document.getElementById('today28').innerHTML = today28;

    // For minus 35's date *****************************************
    let minus35 = new Date(today);
    minus35.setDate(today.getDate()-35);
    let today35 = minus35.toLocaleDateString(undefined,options);

    document.getElementById('today35').innerHTML = today35;
}

displayDates();