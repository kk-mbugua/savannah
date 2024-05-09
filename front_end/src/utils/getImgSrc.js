// Used specifically to generate google drive image links
export default function getImgSrc(link) {
    if (link === undefined || link.length <= 0) return "";

    const id = link.split("/")[5];
    return `https://drive.google.com/thumbnail?id=${id}&sz=w1000`;
}
