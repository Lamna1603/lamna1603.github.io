/* <div class="contact">
        <div class="inputs">
            <input type="text" placeholder="Vui long nhap ma mau">
            <input type="text" placeholder="Vui long nhap chieu ngang(px)">
            <input type="text" placeholder="Vui long nhap chieu cao(px)">
        </div>

        <button class="button">
            Submit
        </button>
    </div> */

const color = document.querySelector(".color");
const width = document.querySelector(".width");
const height = document.querySelector(".height");
const submit = document.querySelector(".button");
const result = document.querySelector(".result");

submit.addEventListener('click',
    function () {
        const v_color = color.value;
        const v_width = width.value;
        const v_height = height.value;

        if (!v_color || !(v_width) || !(v_height)) {
            alert('Thong tin bi thieu, ban can nhap day du thong tin')
        }
        else
            result.setAttribute("style", `background-color: ${v_color}; width: ${v_width}px; height: ${v_height}px;`)
    }
);

result.addEventListener('click',
    function () {
        color.value = "";
        width.value = "";
        height.value = "";
        result.setAttribute("style", "")
    });