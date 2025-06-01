/*Define buttons*/
const q_button = document.getElementById("heater-1");
const w_button = document.getElementById("heater-2");
const e_button = document.getElementById("heater-3");
const a_button = document.getElementById("heater-4");
const s_button = document.getElementById("clap");
const d_button = document.getElementById("open-HH");
const z_button = document.getElementById("Kick-n'-Hat");
const x_button = document.getElementById("Kick");
const c_button = document.getElementById("Closed-HH");
const result = document.getElementById("display");
const toggle = document.getElementById("power-toggle");
const on_off = document.getElementById("on-off");
const volume = document.getElementById("volume");
const current_volume = document.getElementById("current-volume");

const sounds = [
    {
        id:"Q",
        file_name:"Heater-1.mp3",
        drum_name:"Heater 1",
        button_click:q_button
    },
    {
        id:"W",
        file_name:"Heater-2.mp3",
        drum_name:"Heater 2",
        button_click:w_button
    },
    {
        id:"E",
        file_name:"Heater-3.mp3",
        drum_name:"Heater 3",
        button_click:e_button
    },
    {
       id:"A",
       file_name:"Heater-4_1.mp3",
       drum_name:"Heater 4",
       button_click:a_button
    },
    {
        id:"S",
       file_name:"Heater-6.mp3",
       drum_name:"Clap",
       button_click:s_button
    },
    {
      id:"D",
       file_name:"Dsc_Oh.mp3",
       drum_name:"Open-HH",
       button_click:d_button
    },
    {
        id:"Z",
       file_name:"Kick_n_Hat.mp3",
       drum_name:"Kick-n'-Hat",
       button_click:z_button
    },
    {
        id:"X",
       file_name:"RP4_KICK_1.mp3",
       drum_name:"Kick",
       button_click:x_button
    },
    {
        id:"C",
       file_name:"Cev_H2.mp3",
       drum_name:"Closed-HH",
       button_click:c_button
    }
];

const audio = new Audio();

let music_adder = `https://cdn.freecodecamp.org/curriculum/drum/<fileName>`;

toggle.addEventListener("change", ()=>{
    if (toggle.checked) {
        on_off.textContent = "On";
    } else {
        on_off.textContent = "Off";
    }
});

sounds.forEach((sound)=> {
    sound.button_click.addEventListener("click",()=>{
       if (toggle.checked) {audio.src = `https://cdn.freecodecamp.org/curriculum/drum/${sound.file_name}`;
        result.textContent = sound.drum_name;
        audio.play();
        sound.button_click.style.color = "#00FFF7";
        audio.addEventListener("ended", () => {
                               sound.button_click.style.color = "#f0efef";
                               });
    } else {
        result.textContent = "";
    }
    });
});
document.addEventListener("keydown", (e)=>{
    const key_sound = sounds.find((sound)=>sound.id.toLowerCase()===e.key.toLowerCase());
    audio.src = `https://cdn.freecodecamp.org/curriculum/drum/${key_sound.file_name}`;
    result.textContent = key_sound.drum_name;
    audio.play();
    key_sound.button_click.style.color = "#00FFF7";
    audio.addEventListener("ended", () => {
                               key_sound.button_click.style.color = "#f0efef";
                               });
});

volume.addEventListener("change", ()=> {
    audio.volume = volume.value;
    current_volume.textContent = `${volume.value * 100}%`;
});
