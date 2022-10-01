import qrcode

image = qrcode.make("http://127.0.0.1:8000/")

image.save("./QrCodes/image_1.png")
