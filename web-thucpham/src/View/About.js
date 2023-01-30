import React from 'react';
import './About.css';

function Content(props) {
    return (
        <div className="col-md-6 align-items-center content-about">
            <div className="content">
                <h2><span>THÔNG ĐIỆP TỪ CHÚNG TÔI</span><br />{props.title2}</h2><br />
                <p>{props.content}</p>
            </div>
        </div>
    )
}

function Service(props) {
    return (
        <div className="col-md-3  icon-about text-center">
            <i className={props.icon} />
            <h6>{props.title}</h6>
            <p>{props.content}</p>
        </div>
    )
}

function About(props) {
    document.title = "About";
    return (
        <div>
            <div className="title ">
                <div className="container">
                    <h2 className="my-5">VỀ CHÚNG TÔI</h2>
                    <div className="content d-flex justify-content-evenly">
                        <p>Với mong muốn đem đến cho mọi gia đình Việt những loại hoa quả sạch – tươi - ngon – dinh dưỡng
                            nhất. Đồng
                            thời là cầu nối để các vườn cây ăn quả sạch trên khắp cả nước của những người nông dân tâm huyết
                            được
                            tiếp
                            cận gần hơn với người tiêu dùng. Shophoaqua.vn đã được thành lập với hệ thống cửa hàng bán lẻ,
                            cửa hàng
                            trực
                            tuyến sẵn sàng phục vụ cho mọi khách hàng.</p>
                        <p>Shop hoa quả chúng tôi cung cấp đầy đủ các loại hoa quả sạch 3 miền, hoa quả nhập khẩu từ nước
                            ngoài,
                            cam
                            kết tuyệt đối về chất lượng và bình ổn giá. Không chỉ bán lẻ trái cây thông thường, chúng tôi
                            còn cung
                            cấp
                            giỏ hoa quả, mâm trái cây đi chùa, hoa quả gọt sẵn, ship hoa quả tận nơi nhanh chóng với mọi giá
                            trị đơn
                            hàng.</p>
                    </div>
                </div>
            </div>
            <section className="container">
                <div className="row">
                    <div className="col-md-6 img-about">
                        <img src="image/cach-chon-trai-cay-nhap-khau-tuoi-sach-5.jpg" alt="" width='100%' />
                    </div>
                    <Content title2='Câu chuyện thương hiệu'
                        content='Xuất phát từ việc giải quyết và đáp ứng nhu cầu của khách hàng về thực phẩm có chất lượng.
                    Vitamin House đưa ra giải pháp nhằm cung cấp các sản phẩm có tiêu chuẩn quốc tế, trong đó đa số
                    là thực phẩm ngoại nhập có giá trị và chất lượng cao. Vitamin House được sinh ra với mục tiêu
                    "Vì sức khỏe gia đình bạn", do đó sức khỏe người tiêu dùng luôn luôn là tiêu chí đầu tiên trong
                    suốt quá trình hình thành và phát triển kinh doanh của thương hiệu.' />
                </div>
                <div className="row">
                    <Content
                        title2='Giá trị cốt lõi'
                        content='Đối với khách hàng: đảm bảo quyền lợi và mang lại trải nghiệm mua sắm đẳng cấp.
                                Đối với nhân viên: đảm bảo về môi trường làm việc công bằng, văn minh, có thu nhập cao và thúc
                                đẩy khả năng phát triển bản thân.
                                Đối với cổ đông: trung thực, minh bạch và đảm bảo lợi ích.'
                    />
                    <div className="col-md-6 img-about">
                        <img src="image/196840-hoa-qua-dam-sua-chua.jpg" alt="" width='100%' />
                    </div>
                </div>
                <div className="row">
                    <Service title='Đổi trả hoàn tiền'
                        icon='fa-solid fa-map-location-dot'
                        content='Nếu nhận được sản phẩm bị lỗi ngoại quan (có dấu hiệu bị trầy xước,
                            hư hỏng bên ngoài) ,
                            quý khách vui lòng liên hệ trong vòng 48h kể từ khi nhận hàng thành công.'
                    />
                    <Service title='Chính sách bảo mật'
                        icon='fa-regular fa-heart'
                        content='Chúng tôi coi trọng việc bảo mật thông tin và
                            sử dụng các biện pháp tốt nhất để bảo vệ thông tin cũng
                            như việc thanh toán của khách hàng.'
                    />
                    <Service title='Hỗ trợ khách hàng 24/7'
                        icon='fa-regular fa-message'
                        content='Quý Khách hàng có ý kiến đóng góp/khiếu nại
                            liên quan đến chất lượng sản phẩm, Quý Khách hàng vui
                            lòng liên hệ đường dây chăm sóc khách hàng của chúng tôi.'
                    />
                    <Service title='Thế mạnh của chúng tôi?'
                        icon='fa-solid fa-splotch'
                        content='Chúng tôi coi trọng việc bảo mật thông tin và
                            sử dụng các biện pháp tốt nhất để bảo vệ thông tin cũng
                            như việc thanh toán của khách hàng'
                    />
                </div>
            </section></div>

    );
}

export default About;