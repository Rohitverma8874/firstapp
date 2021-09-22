import { useState } from "react";

const Gallery = () => {

    const img1 = "https://mp1st.com/wp-content/uploads/2020/12/apps.34922.13883884071125451.e7212451-a97c-482e-bed4-8f193b79fa8c.jpg"
    const img2 = "http://cdn.capcom-unity.com/2020/10/Vergil-vs-Dante-1024x576.jpg";
    const img3 = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e67b0ca5-b041-4f81-bf70-129dde95bddf/ddl1cvd-e1e5acb0-f46a-4763-adc6-5b6cbbbc1f90.jpg/v1/fill/w_1600,h_807,q_75,strp/vergil_and_dante__devil_may_cry_5__by_emmanettip_ddl1cvd-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODA3IiwicGF0aCI6IlwvZlwvZTY3YjBjYTUtYjA0MS00ZjgxLWJmNzAtMTI5ZGRlOTViZGRmXC9kZGwxY3ZkLWUxZTVhY2IwLWY0NmEtNDc2My1hZGM2LTViNmNiYmJjMWY5MC5qcGciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.uRE6ikBPHF1vT6zVRQcz4U0im4I_7mwNq1xfUPtqUTM";
    const img4 = "https://store-images.s-microsoft.com/image/apps.50770.14327611479570514.09839d1c-bff7-43e5-a465-7031a1f5071e.66af77be-e57b-4fc9-8dbb-2d18d3874ae8?mode=scale&q=90&h=1080&w=1920&background=%23FFFFFF"

    const [mainImg, setMainImg] = useState(img4);

    const handleClick = (img) => {
        setMainImg(img);
    }

    return (
        <div className="container">
            <div>
                <img className="img-fluid" src={mainImg} />
            </div>
            <div className="row mt-3">
                <div className="col-md">
                    <img onClick={e => { handleClick(img1) }} className="img-fluid" src={img1} />
                </div>
                <div className="col-md">
                    <img onClick={e => { handleClick(img2) }} className="img-fluid" src={img2} />
                </div>
                <div className="col-md">
                    <img onClick={e => { handleClick(img3) }} className="img-fluid" src={img3} />
                </div>
                <div className="col-md">
                    <img onClick={e => { handleClick(img4) }} className="img-fluid" src={img4} />
                </div>
            </div>
        </div>
    )

}

export default Gallery;