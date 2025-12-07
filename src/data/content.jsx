import React from 'react';
import { TrendingUp, AlertTriangle, ShieldAlert, HeartHandshake } from 'lucide-react';

export const CASE_STUDY_DATA = {
  title: "Giải Quyết Vấn Đề Câu Hỏi CQ",
  subtitle: "Phân tích trường hợp doanh nghiệp đầu tư vào vùng cao dưới góc nhìn Mác – Lênin",
  intro: "Phát triển kinh tế là đúng đắn, nhưng sự đánh đổi văn hóa có phải là tiến bộ thực sự?",
  sections: [
    {
      id: 1,
      type: "positive",
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: "1. Về mặt tích cực: Kinh tế là cần thiết",
      theory: "Chủ nghĩa Mác – Lênin: Kinh tế (Cơ sở hạ tầng) quyết định Văn hóa – Tinh thần (Kiến trúc thượng tầng).",
      content: "Thực tiễn vùng cao: Cơ sở vật chất nghèo nàn, thiếu y tế – giáo dục, kinh tế tự cung tự cấp, không giao thương." ,
      pointIntro: "Tích cực có thể thấy:", 
      points: 
      [
        "Người dân có thu nhập ổn định.",
        "Hạ tầng du lịch, nhà cửa, đường xá phát triển.",
        "Trẻ em có điều kiện học hành.",
        "Cộng đồng không bị bỏ lại phía sau về kinh tế."
      ],
      conclusion: 
      (
        <div className="flex flex-col gap-3">
          <span>Quan điểm Mác-xít: Phát triển kinh tế nâng cao đời sống vật chất là tiền đề giải phóng con người</span>
          
          <span className="font-black text-yellow-400 leading-relaxed">
            Đó là bước đi hợp quy luật
          </span>
    
          <span className="font-black text-yellow-400 leading-relaxed">
            Về mục tiêu kinh tế: HOÀN TOÀN ĐÚNG
          </span>
        </div>
      )
    },
    {
      id: 2,
      type: "negative",
      icon: <AlertTriangle className="w-8 h-8 text-yellow-500" />,
      title: "2. Sự đánh đổi văn hóa: Có phải tiến bộ?",
      theory: "Theo chủ nghĩa Mác – Lênin, văn hóa dân tộc phải được phát triển theo nguyên tắc:",
      content: "",
      // CẤU TRÚC MỚI CHO PHẦN SO SÁNH
      comparisonGroup: {
        // Phần A: XANH
        partA: {
          title: "a) Giữ gìn những giá trị truyền thống tiến bộ, nhân văn",
          items: [
            "Hoa văn có ý nghĩa tộc người.",
            "Nghi lễ thiêng liêng (thần linh, mùa màng).",
            "Nghề dệt là tri thức dân gian."
          ]
        },
        // Phần B: ĐỎ
        partB: {
          title: "b) Chống lại những hành vi làm “tha hóa” văn hóa",
          subTitle: "Khi lễ hội thiêng bị biến thành show diễn hàng ngày, nó:",
          items: [
            "Mất tính thiêng",
            "Mất giá trị tinh thần",
            "Không còn gắn với cộng đồng",
            "Chỉ còn mang chức năng thương mại hóa"
          ]
        },

        partB_2: {
          title: "",
          subTitle: "Khi trang phục truyền thống bị thay bằng váy LED công nghiệp:",
          items: [
            "Văn hóa bị bóp méo",
            "Con người bị biến thành “đạo cụ” phục vụ khách du lịch",
            "Nghề thủ công chết dần, tri thức bản địa biến mất",
            " Thế hệ sau không còn hiểu ý nghĩa biểu tượng"
          ]
        }
      },

      conclusion: "Đây không phải là phát triển văn hóa, mà là TƯ BẢN HÓA VĂN HÓA."
    },
    {
      id: 3,
      type: "warning",
      icon: <ShieldAlert className="w-8 h-8 text-red-500" />,
      title: "3. Sự phát triển này có bền vững không?",
      theory: "Mác cảnh báo: Cơ sở vật chất phát triển dựa trên hủy hoại giá trị tinh thần cốt lõi → Phát triển méo mó, mất gốc.",
      content: "Khi văn hóa mất bản sắc, sản phẩm du lịch trở nên đồng dạng, sao chép, thiếu riêng biệt, khiến thị trường sụp đổ. Người dân mất kĩ năng truyền thống → lệ thuộc hoàn toàn vào nhà đầu tư, lợi ích kinh tế là tạm thời, nhưng tổn thất văn hóa là vĩnh viễn.",
      highlight: "Sự phát triển phải nâng cao đời sống vật chất nhưng đồng thời duy trì những giá trị văn hóa tiến bộ, nhân đạo của cộng đồng.",
      conclusion: "Nếu văn hóa biến mất → Phát triển không phải của dân tộc, mà là của nhà tư bản."
    },
    {
      id: 4,
      type: "critical",
      icon: <HeartHandshake className="w-8 h-8 text-blue-500" />,
      title: "4. Giao lưu văn hóa hay Xâm lăng văn hóa?",
      theory: "Trong lý luận Mác-xít, đây gọi là: Chủ nghĩa thực dân kiểu mới về văn hóa (Neo-cultural colonialism).",
      comparisonGroup: {

         // Bên ĐỎ: Thực tế sai lệch
        partB: {
          title: "❌ Không phải giao lưu văn hóa vì:",
          subTitle: "",
          items: [
            "Người dân không tự lựa chọn.",
            "Họ buộc phải thay đổi để phục vụ lợi nhuận.",
            "Giá trị truyền thống bị thay thế chứ không phải bổ sung.",
            "Quan hệ diễn ra theo thế kẻ có tiền → áp đặt → người yếu thế."
          ]
        },
        // Bên XANH: Nguyên tắc đúng
        partA: {
          title: "✔ Giao lưu phải dựa trên nguyên tắc:",
          items: [
            "Tự nguyện.",
            "Bình đẳng.",
            "Cùng có lợi.",
            "Không làm mất bản sắc."
          ]
        },
       
      },

      // PHẦN BIỂU HIỆN
      reality: [
        "Đầu tư kinh tế → đổi lại quyền kiểm soát văn hóa.",
        "Văn hóa gốc được định dạng thành “sản phẩm tiêu dùng”.",
        "Người dân bị biến thành 'diễn viên văn hóa' chứ không phải chủ thể văn hóa.",
        "Truyền thống bị “đóng khung” theo kịch bản của tư bản."
      ],
      conclusion: "Kết luận: Văn hóa không còn sống trong cộng đồng mà chỉ tồn tại như công cụ kinh doanh."
    }
  ],
  finalConclusion: {
    title: "Kết luận theo tinh thần Mác-xít",
    mainText: "Phát triển kinh tế là đúng, nhưng phát triển đánh đổi văn hóa là phản tiến bộ.",
    subText: "Sự tiến bộ phải là: Nâng cao vật chất + Giữ gìn giá trị tinh thần + Tạo năng lực tự chủ. Nếu không, bản làng chỉ giàu bề mặt nhưng nghèo bản sắc."
  }
};