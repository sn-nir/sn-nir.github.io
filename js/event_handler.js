var globalModel = 1;
var globalView = 0;


document.addEventListener('DOMContentLoaded', domReady);

        function domReady() {
            
            new Dics({
                container: document.querySelectorAll('.b-dics')[0],
                hideTexts: false,
                textPosition: "top"
            });

            new Dics({
                container: document.querySelectorAll('.b-dics')[1],
                hideTexts: false,
                textPosition: "top"
            });

            new Dics({
                container: document.querySelectorAll('.b-dics')[2],
                hideTexts: false,
                textPosition: "top"
            });

            new Dics({
                container: document.querySelectorAll('.b-dics')[3],
                hideTexts: false,
                textPosition: "top"
            });
        }


        function changeView(idx){
            globalView = idx;
            updateVisual();
        }

        function changeModel(idx){
            globalModel = idx;
            updateVisual();
        }

        function updateVisual() {
            let dics = document.querySelectorAll('.b-dics')[1]
            let sections = dics.getElementsByClassName('b-dics__section')
            let imagesLength = 3
            for (let i = 0; i < imagesLength; i++) {
                let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
                switch (globalModel) {
                    case 0:
                        image.src = './assets/snnir/images/cmp_diff_views_methods/bear/';
                        break;
                    case 1:
                        image.src = './assets/snnir/images/cmp_diff_views_methods/buddha/';
                        break;
                    case 2:
                        image.src = './assets/snnir/images/cmp_diff_views_methods/cow/';
                        break;
                    case 3:
                        image.src = './assets/snnir/images/cmp_diff_views_methods/pot2/';
                        break;
                    case 4:
                        image.src = './assets/snnir/images/cmp_diff_views_methods/reading/';
                        break;
                }
                switch (i) {
                    case 0:
                        image.src = image.src + '/sn_';
                        break;
                    case 1:
                        image.src = image.src + '/ours_';
                        break;
                    case 2:
                        image.src = image.src + '/rnb_neus_';
                        break;
                }
                switch (globalView) {
                    case 0:
                        image.src = image.src + '2.png';
                        break;
                    case 1:
                        image.src = image.src + '5.png';
                        break;
                    case 2:
                        image.src = image.src + '10.png';
                        break;
                    case 3:
                        image.src = image.src + '15.png';
                        break;
                    case 4:
                        image.src = image.src + '20.png';
                        break;
                }
            }

            let scene_list = document.getElementById("modelChoice").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (globalModel == i) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
            let scene_list_2 = document.getElementById("viewChoice").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (globalView == i) {
                    scene_list_2[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list_2[i].children[0].className = "nav-link"
                }
            }
        }

        function objectSceneEvent(idx) {
            let dics = document.querySelectorAll('.b-dics')[0]
            let sections = dics.getElementsByClassName('b-dics__section')
            let imagesLength = 3
            for (let i = 0; i < imagesLength; i++) {
                let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
                switch (idx) {
                    case 0:
                        image.src = './assets/snnir/images/cmp_ps_methods/bear/';
                        break;
                    case 1:
                        image.src = './assets/snnir/images/cmp_ps_methods/buddha/';
                        break;
                    case 2:
                        image.src = './assets/snnir/images/cmp_ps_methods/cow/';
                        break;
                    case 3:
                        image.src = './assets/snnir/images/cmp_ps_methods/pot2/';
                        break;
                    case 4:
                        image.src = './assets/snnir/images/cmp_ps_methods/reading/';
                        break;
                }
                switch (i) {
                    case 0:
                        image.src = image.src + 'psnerf.png';
                        break;
                    case 1:
                        image.src = image.src + 'ours.png';
                        break;
                    case 2:
                        image.src = image.src + 'neus.png';
                        break;
                }
            }

            let scene_list = document.getElementById("object-scale-recon").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
        }

        function objectSceneEventBMVS(idx) {
            let dics = document.querySelectorAll('.b-dics')[2]
            let sections = dics.getElementsByClassName('b-dics__section')
            let imagesLength = 2
            for (let i = 0; i < imagesLength; i++) {
                let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
                switch (idx) {
                    case 0:
                        image.src = './assets/snnir/images/cmp_bmvs/camera/';
                        break;
                    case 1:
                        image.src = './assets/snnir/images/cmp_bmvs/clock/';
                        break;
                    case 2:
                        image.src = './assets/snnir/images/cmp_bmvs/cow/';
                        break;
                    case 3:
                        image.src = './assets/snnir/images/cmp_bmvs/dog/';
                        break;
                    case 4:
                        image.src = './assets/snnir/images/cmp_bmvs/man/';
                        break;
                }
                switch (i) {
                    case 0:
                        image.src = image.src + 'gs.png';
                        break;
                    case 1:
                        image.src = image.src + 'ours.png';
                        break;
                }
            }

            let scene_list = document.getElementById("object-bmvs-recon").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
        }

        function changeVideo(videoNumber) {
            // Get the video element
            var video = document.getElementById("myVideo");
    
            // Set the video source based on the specified videoNumber using a switch case
            switch (videoNumber) {
                case 0:
                    video.src = "./assets/snnir/videos/cmp/bear.mp4";
                    break;
                case 1:
                    video.src = "./assets/snnir/videos/cmp/buddha.mp4";
                    break;
                case 2:
                    video.src = "./assets/snnir/videos/cmp/cow.mp4";
                    break;
                case 3:
                    video.src = "./assets/snnir/videos/cmp/pot2.mp4";
                    break;
                case 4:
                    video.src = "./assets/snnir/videos/cmp/reading.mp4";
                    break;
            }
    
            // Reset the video player
            video.load();


            let scene_list = document.getElementById("video-changer").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (videoNumber == i) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
    
        }

    
        function changeVideo2(videoNumber) {
            // Get the video element
            var video = document.getElementById("myVideo2");
    
            // Set the video source based on the specified videoNumber using a switch case
            switch (videoNumber) {
                case 0:
                    video.src = "../assets/rnb_neus/videos/relighting/bear.mp4";
                    break;
                case 1:
                    video.src = "../assets/rnb_neus/videos/relighting/buddha.mp4";
                    break;
                case 2:
                    video.src = "../assets/rnb_neus/videos/relighting/cow.mp4";
                    break;
                case 3:
                    video.src = "../assets/rnb_neus/videos/relighting/pot2.mp4";
                    break;
                case 4:
                    video.src = "../assets/rnb_neus/videos/relighting/reading.mp4";
                    break;
            }
    
            // Reset the video player
            video.load();


            let scene_list = document.getElementById("video-changer-2").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (videoNumber == i) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
    
        }