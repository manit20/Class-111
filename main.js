Webcam.set({
    height: 300,
    width: 310,
    Image_format: 'png',
    png_quality: 90,

    constraints: {
        faceMode = "enviorment"
    }
});
camera = document.getElementById("camera");
Webcam.attach('#camera');