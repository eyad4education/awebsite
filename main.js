function main() {
    var t = new Array();
    if (document.getElementById('n').value != "") {
        var n = parseInt(document.getElementById('n').value);
        if (n < 6 || n > 10) {
            return false;
        }

        for (let i = 0; i < n; i++) {
            t[i] = Math.floor(Math.random() * 100) + 1
        }
        let min = t[0];
        let max = t[0];
        for (let i = 1; i < n; i++) {
            if (t[i] < min) {
                min = t[i]
            }
            if (t[i] > max) {
                max = t[i]
            }
        }
        document.getElementById('min').value = min;
        document.getElementById('max').value = max;


        document.getElementById('btn').onclick = () => {

            let nb = parseInt(document.getElementById('nb').value);

            if (isNaN(nb)) {
                alert("please enter a number, that's not a number.")
                return false;
            } else if (nb <= min || nb >= max) {
                alert(`enter a number with (${min} < number < ${max})`)
            } else {
                con = false;
                i = 0;
                while (!con && i < n) {
                    if (nb == t[i]) {
                        con = true;
                    } else {
                        i = i + 1
                    }

                }
                // document.getElementById('p1').innerHTML = "";
                let list = ""
                for (let i = 0; i < n; i++) {
                    list += t[i] + " ";
                }

                document.getElementById('p1').innerHTML = "La list est " + list;
                document.getElementById('nb').disabled = true;
                if (con) {
                    document.getElementById('p2').innerHTML = "Vous avez Gangez!";
                } else {
                    document.getElementById('p2').innerHTML = "Vous avez Perdu!";
                }
                document.getElementById('hidden').style.display = "inline";
                document.getElementById('nb').oninput = () => {
                    document.getElementById('nb').value = "nope you can't do that!";
                    alert("nope you can't do that!");
                };
                document.getElementById('hidden').onclick = () => {
                    document.location.reload();
                }


            }
        }

    } else {
        return false;
    }
}