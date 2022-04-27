import React, { useEffect } from "react";
import clsx from "clsx";
import styles from './index.module.scss'
import Banner1 from '../../assets/images/banner1.png';
import Developer from '../../assets/images/developer.png'

export default function AboutPage() {

    useEffect(() => {
        document.title = 'Giới thiệu | DobeeRoom'
    }, [])

    return (
        <div>
            <div className={clsx(styles.containerTop)}>
                <h2 className={clsx(styles.heading)} >Giới thiệu về ứng dụng</h2>
            </div>
            <div className={clsx(styles.container, 'grid')} >
                <div className={clsx('row')} >
                    <div className={clsx('col c-12 m-12 l-6', styles.colLeft)} >
                        <img alt="" src={Banner1} className={clsx(styles.bannerImg)} />
                    </div>
                    <div className={clsx('col c-12 m-12 l-6', styles.wrapper)} >
                        <p>
                            Vấn đề tìm phòng trọ không còn quá mới mẻ với những bạn sinh viên vì bạn 
                            nào cũng ít nhất một lần rơi vào tình huống này và hiểu rõ những gian nan và vất 
                            vả trong chuyện tìm và chuyển phòng trọ cho phù hợp vời chuyện học hành, làm 
                            thêm và đặc biệt là những bạn tân sinh viên càng khó khăn hơn rất nhiều. <br /> Để tìm 
                            được một nơi an ninh tốt, vệ sinh sạch sẽ và giá cả hợp lý,… là một điều khó đối 
                            với những sinh viên, tân sinh viên mới chập chững bước chân lên Hà Nội. 
                        </p>
                        <p>
                            Chính vì vậy, tôi đã lên ý tưởng, và quyết định xây dựng ứng dụng web hỗ trợ tìm nhà trọ nhằm giúp
                            các bạn sinh viên đỡ vất vả hơn trong việc lênh đênh tìm một nơi tá túc suốt 4 năm đại học...
                        </p>
                    </div>
                </div>
                <div className={clsx('row')} style={{ padding: '0 12px' }} >
                    <p>
                        Theo khảo sát thực tế khi tốc độ đô thị hóa, dân số tăng cao, lượng sinh viên 
                        dồn về các thành phố lớn để học tập và làm việc ngày càng đông, làm cho nhu cầu 
                        tìm kiếm chỗ ở phòng trọ luôn trong tình trạng cấp thiết và nóng hổi.
                        Đầu tiên sẽ khảo sát tình hình chung của các trường đại học tại các thành phố
                        lớn thì hầu như 85% - 95% sinh viên đang theo học tại các trường Đại học, Cao 
                        đẳng đều ở các phòng trọ cho thuê hoặc sinh viên nào gia đình khá giả hơn thì ở
                        chung cư. Còn lại sinh viên sẽ ở các khu kí túc xá, đa số kí túc xá được xây dựng 
                        công lập nên số lượng chỗ ở cung cấp cho sinh viên còn hạn chế. Và cơ sở vật chất 
                        còn hạn hẹp, chưa đảm bảo chất lượng cho sinh viên sinh hoạt và học tập. 
                        Tìm hiểu nhu cầu ở phòng trọ của các bạn sinh viên. Hầu hết đa số các bạn 
                        đều cho rằng việc cần tìm kiếm một phòng trọ là điều quan trong nhất khi nhập học 
                        tại các trường. Tuy nhiên việc tìm phòng trọ gặp rất nhiều khó khăn do thông tin và 
                        tra cứu còn hạn chế, không có công cụ chuyên nghiệp để hỗ trợ vì vậy việc cần một 
                        ứng dụng cung cấp và hỗ trợ tìm kiếm và đăng tin tìm người ở ghép là một điều thực 
                        sự cần thiết.
                    </p>
                    <p>
                    Tuy nhiên, trong quá trình phát triển do thiếu hụt về đầu tư và kinh phí và thời gian còn hạn chế, 
                    nên ứng dụng có thể còn nhiều vấn đề phát sinh. Đương nhiên mình vẫn đang cố khắc phục để mang lại một trải nghiệm tốt nhất cho mọi người.
                
                    </p>
                </div>
                <div className={clsx('row')} style={{ padding: '0 12px' }} >
                    <h3 className={clsx(styles.subHeading)}  >Nhà phát triển (Developer) </h3>
                </div>
                <div className={clsx('row')} style={{ padding: '0 16px' }} >
                    <div className={clsx(styles.boxAuthor)} >   
                        <img alt="" src={Developer} width={120} className={clsx(styles.avatar)} />
                        <h4> Đông Ngô</h4>
                        <span>AndyngoJs</span>
                        <p> Leader of DOBEETEAM </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
