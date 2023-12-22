import cv2

def detectPage(image):
    # Detect edges
    thresh1 = 100
    thresh2 = 300
    imgCopy = image.copy() * 0

    image =cv2.GaussianBlur(image, (5,5), 0)
    edges = cv2.Canny(image, thresh1, thresh2)
    houghLines = cv2.HoughLinesP(edges, 1, 3.14/180, 300)
    for line in houghLines:
        for x1,y1,x2,y2 in line:
            cv2.line(imgCopy,(x1,y1),(x2,y2),(255,255,255),2)
    resizedEdges = cv2.resize(imgCopy, (0,0), fx=0.2, fy=0.2)
    cv2.imshow("Edges", resizedEdges)
    cv2.waitKey(0)

image = cv2.imread('bookPages.jpg')
detectPage(image)