        const btn = document.querySelector('#btnradio1');
        const btn2 = document.querySelector('#btnradio2');
        const btn3 = document.querySelector('#btnradio3');
        // handle button click
        btn.onclick = function () {
            const rbs = document.querySelectorAll('input[name="btnradio"]');
            let selectedValue;
            for (const rb of rbs) {
                if (rb.checked) {
                    selectedValue = rb.value;
                    document.getElementById('tmh').innerHTML = "Tamanho P"
                    break;
                }
            }
        }
        // handle button click
        btn2.onclick = function () {
            const rbs = document.querySelectorAll('input[name="btnradio"]');
            let selectedValue;
            for (const rb of rbs) {
                if (rb.checked) {
                    selectedValue = rb.value;
                    document.getElementById('tmh').innerHTML = "Tamanho M"
                    break;
                }
            }
        }
        // handle button click
        btn3.onclick = function () {
            const rbs = document.querySelectorAll('input[name="btnradio"]');
            let selectedValue;
            for (const rb of rbs) {
                if (rb.checked) {
                    selectedValue = rb.value;
                    document.getElementById('tmh').innerHTML = "Tamanho G"
                    break;
                }
            }
        }