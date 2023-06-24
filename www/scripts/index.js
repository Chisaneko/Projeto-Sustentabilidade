var iconTypePressed = ''
var iconDayPressed = ''
var iconRowPressed = 0
var isHeart1Filled  = null
var isHeart2Filled  = null
var isHeart3Filled  = null
var totalPoints =  0
var totalWeeklyPoints = 0
var dayPoints = 0
var points = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
]

function checkDay(iconDayPressed){
    switch(iconDayPressed){
            case 'seg':
            dayPoints = 0
            break
            case 'ter':
            dayPoints = 1
            break
            case 'qua':
            dayPoints = 2
            break  
            case 'qui':  
            dayPoints = 3
            break  
            case 'sex':  
            dayPoints = 4
            break  
            case 'sab':  
            dayPoints = 5
            break  
            case 'dom':  
            dayPoints = 6
            break      
    }

}

function scoreUpdate(iconDayPressed,dayPoints){
    document.getElementById(`mm-ponto-n-${iconDayPressed}`).innerText = (points[dayPoints][1]+points[dayPoints][2]+points[dayPoints][3])
    points[dayPoints][0] = (points[dayPoints][1]+points[dayPoints][2]+points[dayPoints][3])
    totalWeeklyPoints = (points[0][0]+points[1][0]+points[2][0]+points[3][0]+points[4][0]+points[5][0]+points[6][0])
}

function heartFill(iconTypePressed,iconDayPressed,iconRowPressed){
    checkDay(iconDayPressed)
    if (iconRowPressed == 1 ) {
        isHeart1Filled = document.getElementById(`${iconTypePressed}${iconDayPressed}cora1`)
        isHeart2Filled = document.getElementById(`${iconTypePressed}${iconDayPressed}cora2`)
        if (isHeart1Filled.getAttribute("src") == "../imgs/coracaocheio.png" && isHeart2Filled.getAttribute("src") == "../imgs/coracaovazio.png"){
            document.getElementById(`${iconTypePressed}${iconDayPressed}cora1`).src="../imgs/coracaovazio.png"
            document.getElementById(`${iconTypePressed}${iconDayPressed}cora2`).src="../imgs/coracaovazio.png"
            document.getElementById(`${iconTypePressed}${iconDayPressed}cora3`).src="../imgs/coracaovazio.png"
            switch(iconTypePressed){
                case 'garrafa':
                        points[dayPoints][1]= 0
                        break
                case 'planta':
                        points[dayPoints][1]= 0
                        break
                case 'gota':
                        points[dayPoints][1]= 0
                        break
            }

        } else {
            document.getElementById(`${iconTypePressed}${iconDayPressed}cora1`).src="../imgs/coracaocheio.png"
            document.getElementById(`${iconTypePressed}${iconDayPressed}cora2`).src="../imgs/coracaovazio.png"
            document.getElementById(`${iconTypePressed}${iconDayPressed}cora3`).src="../imgs/coracaovazio.png"
            switch(iconTypePressed){
                case 'garrafa':
                        points[dayPoints][1] = 10
                        break
                case 'planta':
                        points[dayPoints][2] = 10
                        break
                case 'gota':
                        points[dayPoints][3] = 10
                        break
            }
        }
         
    } else if (iconRowPressed == 2){
        isHeart2Filled = document.getElementById(`${iconTypePressed}${iconDayPressed}cora2`)
        isHeart3Filled = document.getElementById(`${iconTypePressed}${iconDayPressed}cora3`)
        if (isHeart2Filled.getAttribute("src") == "../imgs/coracaocheio.png" && isHeart3Filled.getAttribute("src") == "../imgs/coracaovazio.png"){
            document.getElementById(`${iconTypePressed}${iconDayPressed}cora1`).src="../imgs/coracaovazio.png"
            document.getElementById(`${iconTypePressed}${iconDayPressed}cora2`).src="../imgs/coracaovazio.png"
            document.getElementById(`${iconTypePressed}${iconDayPressed}cora3`).src="../imgs/coracaovazio.png"
            switch(iconTypePressed){
                case 'garrafa':
                        points[dayPoints][1]= 0
                        break
                case 'planta':
                        points[dayPoints][2]= 0
                        break
                case 'gota':
                        points[dayPoints][3]= 0
                        break
            }
        } else {
            document.getElementById(`${iconTypePressed}${iconDayPressed}cora1`).src="../imgs/coracaocheio.png"
            document.getElementById(`${iconTypePressed}${iconDayPressed}cora2`).src="../imgs/coracaocheio.png"
            document.getElementById(`${iconTypePressed}${iconDayPressed}cora3`).src="../imgs/coracaovazio.png"
            switch(iconTypePressed){
                case 'garrafa':
                        points[dayPoints][1]= 20
                        break
                case 'planta':
                        points[dayPoints][2]= 20
                        break
                case 'gota':
                        points[dayPoints][3]= 20
                        break
            }
        }

    } else if (iconRowPressed == 3 ){
        isHeart3Filled = document.getElementById(`${iconTypePressed}${iconDayPressed}cora3`)
        if (isHeart3Filled.getAttribute("src") == "../imgs/coracaocheio.png"){
            document.getElementById(`${iconTypePressed}${iconDayPressed}cora1`).src="../imgs/coracaovazio.png"
            document.getElementById(`${iconTypePressed}${iconDayPressed}cora2`).src="../imgs/coracaovazio.png"
            document.getElementById(`${iconTypePressed}${iconDayPressed}cora3`).src="../imgs/coracaovazio.png"
            switch(iconTypePressed){
                case 'garrafa':
                        points[dayPoints][1]= 0
                        break
                case 'planta':
                        points[dayPoints][2]= 0
                        break
                case 'gota':
                        points[dayPoints][3]= 0
                        break
            }
        } else {
            document.getElementById(`${iconTypePressed}${iconDayPressed}cora1`).src="../imgs/coracaocheio.png"
            document.getElementById(`${iconTypePressed}${iconDayPressed}cora2`).src="../imgs/coracaocheio.png"
            document.getElementById(`${iconTypePressed}${iconDayPressed}cora3`).src="../imgs/coracaocheio.png"
            switch(iconTypePressed){
                case 'garrafa':
                        points[dayPoints][1]= 30
                        break
                case 'planta':
                        points[dayPoints][2]= 30
                        break
                case 'gota':
                        points[dayPoints][3]= 30
                        break
            }
        }
    }
    scoreUpdate(iconDayPressed,dayPoints)
}

function resetButton(){
    let pointType = ['garrafa','planta','gota']
    let dayPressed = ['seg','ter','qua','qui','sex','sab','dom']
    for (let i = 0; i <= 2; i++){
        for (let o = 0; o <= 6; o++){
            document.getElementById(`${pointType[i]}${dayPressed[o]}cora1`).src="../imgs/coracaovazio.png"
            document.getElementById(`${pointType[i]}${dayPressed[o]}cora2`).src="../imgs/coracaovazio.png"
            document.getElementById(`${pointType[i]}${dayPressed[o]}cora3`).src="../imgs/coracaovazio.png"
            points[o] = [0,0,0,0]
            scoreUpdate(`${dayPressed[o]}`,1)
        }
    }
}

function finishButton(){
    totalPoints =+ totalWeeklyPoints
    document.getElementById('user-data').innerText = (totalPoints)
    resetButton()
}