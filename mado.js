function more() {
    var table = document.getElementById("tg");
    var rowCount = table.getElementsByTagName("tr").length;
    var id = rowCount + 5;

    var row = table.insertRow(1);
    row.id = id;

    for (let i = 0; i < 37; i++) {
        var cell = row.insertCell(i);
        cell.id = i;
        cell.innerHTML = `<input type="text" id="s${id}${i}" style="color: white; width: 65%; background-color: transparent; border: 0px;">`;
    }
}

function submit() {
    localStorage.clear();
    var table = document.getElementById("tg");
    var rowCount = table.getElementsByTagName("tr").length;
    let result = "";

    let localStorageValues = [];

    for (let j = 6; j < rowCount + 5; j++) {
        let total = 0, totalrp = 0, totalap = 0;
        let NAME, RANK, MULTI, NT1, NT2, NT3, NT4, NT5, NT6W, NT6L, RT1, MIN, HOUR, V1, RT2, RT3, RT3B, RT4, RT5, RT5H, RT6, RT6H, RT7, RT8, RT9, RT10, RT10W, RT11NA, RT11AT, RT12, RT13, RT14, SR, HP, PMPW, PMPL, OS;

        for (let a = 0; a < 37; a++) {
            let id = `s${j}${a}`;
            let element = document.getElementById(id);
            if (element) {
                switch (a) {
                    case 0: NAME = element.value; break;
                    case 1: RANK = element.value; break;
                    case 2: MULTI = parseFloat(element.value) || 1; break; // Ensure MULTI is a number
                    case 3: NT1 = parseFloat(element.value) || 0; break;
                    case 4: NT2 = parseFloat(element.value) || 0; break;
                    case 5: NT3 = parseFloat(element.value) || 0; break;
                    case 6: NT4 = parseFloat(element.value) || 0; break;
                    case 7: NT5 = parseFloat(element.value) || 0; break;
                    case 8: NT6W = parseFloat(element.value) || 0; break;
                    case 9: NT6L = parseFloat(element.value) || 0; break;
                    case 10: RT1 = parseFloat(element.value) || 0; break;
                    case 11: MIN = parseFloat(element.value) || 0; break;
                    case 12: HOUR = parseFloat(element.value) || 0; break;
                    case 13: V1 = parseFloat(element.value) || 0; break;
                    case 14: RT2 = parseFloat(element.value) || 0; break;
                    case 15: RT3 = parseFloat(element.value) || 0; break;
                    case 16: RT3B = parseFloat(element.value) || 0; break;
                    case 17: RT4 = parseFloat(element.value) || 0; break;
                    case 18: RT5 = parseFloat(element.value) || 0; break;
                    case 19: RT5H = parseFloat(element.value) || 0; break;
                    case 20: RT6 = parseFloat(element.value) || 0; break;
                    case 21: RT6H = parseFloat(element.value) || 0; break;
                    case 22: RT7 = parseFloat(element.value) || 0; break;
                    case 23: RT8 = parseFloat(element.value) || 0; break;
                    case 24: RT9 = parseFloat(element.value) || 0; break;
                    case 25: RT10 = parseFloat(element.value) || 0; break;
                    case 26: RT10W = parseFloat(element.value) || 0; break;
                    case 27: RT11NA = parseFloat(element.value) || 0; break;
                    case 28: RT11AT = parseFloat(element.value) || 0; break;
                    case 29: RT12 = parseFloat(element.value) || 0; break;
                    case 30: RT13 = parseFloat(element.value) || 0; break;
                    case 31: RT14 = parseFloat(element.value) || 0; break;
                    case 32: SR = parseFloat(element.value) || 0; break;
                    case 33: HP = parseFloat(element.value) || 0; break;
                    case 34: PMPW = parseFloat(element.value) || 0; break;
                    case 35: PMPL = parseFloat(element.value) || 0; break;
                    case 36: OS = parseFloat(element.value) || 0; break;
                }
            }
        }

        if (RANK === "veteran" || RANK === "member") {
            total = MULTI * (NT1 * 17 + NT2 * 10 + NT3 * 8 + NT4 * 3 + NT5 * 10 + NT6W * 15 + NT6L * 6 + RT1 * 15 + MIN * 4 + V1 * 5 + RT2 * 15 + RT3 * 7 + RT3B * 5 + RT4 * 5 + RT5 * 7 + RT6 * 10 + RT8 * 10 + RT9 * 4 + RT10 * 3 + RT10W * 5 + RT11NA * 4 + RT11AT * 6 + RT12 * 10 + RT13 * 3 + RT14 * 3 + SR * 9 + HP * 6 + PMPL * 4 + PMPW * 5 + OS * 15);
            total = Math.round(total);
            totalrp = NT1 * 13 + NT2 * 4 + NT3 * 6 + NT4 * 1 + NT5 * 4 + NT6W * 7 + NT6L * 2 + RT1 * 5 + HOUR * 3 + RT2 * 5 + RT3 * 5 + RT4 * 3 + RT5 * 5 + RT6 * 7 + RT8 * 5 + RT9 * 2 + RT10 * 1 + RT10W * 2 + RT11NA * 1 + RT11AT * 3 + RT12 * 5 + RT13 * 1 + RT14 * 1 + SR * 5 + HP * 2 + PMPL * 2 + PMPW * 3 + OS * 8;
            totalap = NT1 * 7 + NT2 * 7 + NT3 * 5 + NT4 * 2 + NT5 * 7 + NT6W * 10 + NT6L * 10 + RT1 * 5 + HOUR * 2 + RT2 * 4 + RT3 * 15 + RT4 * 10 + RT5 * 7.5 + RT5H * 10 + RT6 * 10 + RT6H * 14 + RT8 * 8 + RT9 * 4 + RT10 * 3 + RT10W * 6 + RT11NA * 3 + RT11AT * 7 + RT12 * 8 + RT14 * 2 + SR * 4 + HP * 3 + PMPL * 3 + PMPW * 5 + OS * 12;
        }

        let data = `${NAME} (${RANK})\r\r\nPoints: ${total} RP: ${totalrp} AP: ${totalap}\r\n\r\n`;

        function addTaskDetails(taskCount, multi, pointsValue, rpValue, apValue, taskName) {
            if (taskCount > 0) {
                return `+${taskCount * multi * pointsValue} points +${taskCount * rpValue} rp +${taskCount * apValue} ap for ${taskCount}x ${taskName}\r\n`;
            }
            return '';
        }

        data += addTaskDetails(NT1, MULTI, 17, 13, 7, 'N-Task 1');
        data += addTaskDetails(NT2, MULTI, 10, 4, 7, 'N-Task 2');
        data += addTaskDetails(NT3, MULTI, 8, 6, 5, 'N-Task 3');
        data += addTaskDetails(NT4, MULTI, 3, 1, 2, 'N-Task 4');
        data += addTaskDetails(NT5, MULTI, 10, 4, 7, 'N-Task 5');
        data += addTaskDetails(NT6W, MULTI, 15, 7, 10, 'N-Task 6 [Win]');
        data += addTaskDetails(NT6L, MULTI, 6, 2, 10, 'N-Task 6 [Loss]');
        data += addTaskDetails(RT1, MULTI, 15, 5, 5, 'R-Task 1');
        data += (MIN > 0) ? `+${MIN * MULTI * 4} points for additional 20 minutes\r\n` : '';
        data += (HOUR > 0) ? `+${HOUR * 3} rp +${HOUR * 2} AP for 1h in the support\r\n` : '';
        data += (V1 > 0) ? `+${V1 * MULTI * 5} points for ending the support in a 1v1\r\n` : '';
        data += addTaskDetails(RT2, MULTI, 15, 5, 4, 'R-Task 2');
        data += addTaskDetails(RT3, MULTI, 7, 5, 15, 'R-Task 3');
        data += (RT3B > 0) ? `+${RT3B * MULTI * 5} points for being the best on the joint training\r\n` : '';
        data += addTaskDetails(RT4, MULTI, 5, 3, 10, 'R-Task 4');
        data += addTaskDetails(RT5, MULTI, 7, 5, 7.5, 'R-Task 5 (attending)');
        data += (RT5H > 0) ? `+${RT5H * 10} ap (hosting) for ${RT5H}x R-Task 5\r\n` : '';
        data += addTaskDetails(RT6, MULTI, 10, 7, 10, 'R-Task 6 (attending)');
        data += (RT6H > 0) ? `+${RT6H * 14} ap (hosting) for ${RT6H}x R-Task 6\r\n` : '';        
        data += addTaskDetails(RT8, MULTI, 10, 5, 8, 'R-Task 8');
        data += addTaskDetails(RT9, MULTI, 4, 2, 4, 'R-Task 9');
        data += addTaskDetails(RT10, MULTI, 3, 1, 3, 'R-Task 10');
        data += addTaskDetails(RT10W, MULTI, 5, 2, 6, 'R-Task 10 [Wartime]');
        data += addTaskDetails(RT11NA, MULTI, 4, 1, 3, 'R-Task 11 [Non-Allied HR]');
        data += addTaskDetails(RT11AT, MULTI, 6, 3, 7, 'R-Task 11 [Aogiri-Tree HR]');
        data += addTaskDetails(RT12, MULTI, 10, 5, 8, 'R-Task 12');
        data += addTaskDetails(RT13, MULTI, 3, 1, 2, 'R-Task 13');
        data += addTaskDetails(RT14, MULTI, 3, 1, 2, 'R-Task 14');
        data += addTaskDetails(SR, MULTI, 9, 5, 4, 'M.E. Squad Raid');
        data += addTaskDetails(HP, MULTI, 6, 2, 3, 'M.E. High-Priority');
        data += addTaskDetails(PMPW, MULTI, 5, 3, 5, 'Q.E. Practice Makes Perfect [Win]');
        data += addTaskDetails(PMPL, MULTI, 4, 2, 3, 'Q.E. Practice Makes Perfect [Loss]');
        data += addTaskDetails(OS, MULTI, 15, 8, 12, 'Q.E. Overwhelming Superiority');

        data += `=================================\r\n`;
        localStorage.setItem(j, data);
    }

    for (let b = 1; b <= 87; b++) {
        let value = localStorage.getItem(b);
        if (value !== null) {
            localStorageValues.push(value);
        }
    }

    result = localStorageValues.reverse().join("");

    const textToBLOB = new Blob([result], { type: 'text/plain' });
    const sFileName = 'Task_Record.txt';
    let newLink = document.createElement("a");
    newLink.download = sFileName;
    newLink.href = window.URL.createObjectURL(textToBLOB);
    newLink.style.display = "none";
    document.body.appendChild(newLink);
    newLink.click();
}

function handleRowFocus(event) {
    const row = event.target.closest('tr');
    row.classList.add('active-row');
}

function handleRowBlur(event) {
    const row = event.target.closest('tr');
    row.classList.remove('active-row');
}

function addRowFocusListeners() {
    const table = document.getElementById('tg');

    if (!table) {
        console.error("Table with id 'tg' not found!");
        return;
    }

    const inputs = table.querySelectorAll('input');

    inputs.forEach(input => {
        input.removeEventListener('focus', handleRowFocus);
        input.removeEventListener('blur', handleRowBlur);

        input.addEventListener('focus', handleRowFocus);
        input.addEventListener('blur', handleRowBlur);
    });
}

window.addEventListener('load', addRowFocusListeners);

function more() {
    var table = document.getElementById("tg");
    var rowCount = table.getElementsByTagName("tr").length;
    var id = rowCount + 5;

    var row = table.insertRow(1);
    row.id = id;

    for (let i = 0; i < 37; i++) {
        var cell = row.insertCell(i);
        cell.id = i;
        cell.innerHTML = `<input type="text" id="s${id}${i}" style="color: white; width: 65%; background-color: transparent; border: 0px;">`;
    }
    addRowFocusListeners();
}