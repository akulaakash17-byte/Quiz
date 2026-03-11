let totalScore = 0;
        let answers = {};

        function check(answer,id){
            answers[id] = answer;
        }
        function score() {

            let totalScore = 0;

            for (let i = 1; i <= 10; i++) {
                let id = "a" + i;
                if (answers[id] === true) {
                    document.getElementById(id).innerHTML = "<span class='correct'>Correct Answer</span>"
                    totalScore++;
                } else {
                    document.getElementById(id).innerHTML = "<span class='incorrect'>Incorrect Answer</span>"
                }
            }

            let text = "Your Total Score = " + totalScore + "/10 ";

            if (totalScore <= 5) {
                text += "Failed";
            } else {
                text += "Passed";
            }

            document.getElementById("result").innerHTML = text;

        }