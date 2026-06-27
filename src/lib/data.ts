export interface Artwork {
  id: number;
  title: string;
  artistName: string;
  artistAge: number;
  birthYear: number;
  location: string;
  artistAvatar: string;
  artistStory: string;
  dream: string;
  description: string;
  fullStory: string[];
  tag: string;
  image: string;
  year: string;
  material: string;
  donorCount: number;
  hasDrawing: boolean;
}

export const artworks: Artwork[] = [
  {
    id: 1,
    title: "Ngôi Sao Hy Vọng",
    artistName: "Nghiêm Thị Phương Thảo",
    artistAge: 11,
    birthYear: 2015,
    location: "Thôn Đoàn Kết",
    artistAvatar: "/artists/artist_10.jpg",
    artistStory:
      "Nghiêm Thị Phương Thảo là học sinh người Kinh đến từ thôn Đoàn Kết. Em mắc khuyết tật trí tuệ, rối loạn tâm thần, tăng động giảm chú ý và khó kiểm soát hành vi. Gia đình em có hoàn cảnh khó khăn, công việc và thu nhập của bố mẹ đều không ổn định.",
    dream:
      "Mỗi nét vẽ là một điều em muốn nói. Trong từng nét vẽ còn vụng về ấy là sự hồn nhiên, là niềm vui, là khát khao được yêu thương và được nhìn thấy như bao người khác.",
    description:
      "Ngôi sao đỏ ở trung tâm như một biểu tượng của niềm tự hào, của những điều đẹp đẽ mà em luôn hướng tới.",
    fullStory: [
      "Giữa trang giấy trắng là một ngôi sao đỏ thật lớn, nổi bật và rực rỡ. Hai bên là những chú gà nhỏ với nét vẽ ngây ngô nhưng đầy chân thành. Có thể với người lớn, đây chỉ là những hình vẽ đơn giản. Nhưng với em, đó là cả một thế giới cảm xúc được gửi gắm bằng những nét bút mộc mạc nhất.",
      "Ngôi sao đỏ ở trung tâm như một biểu tượng của niềm tự hào, của những điều đẹp đẽ mà em luôn hướng tới. Dù chưa thể diễn đạt bằng những lời nói trọn vẹn, em đã kể câu chuyện của mình qua màu sắc, hình ảnh và trí tưởng tượng. Bức tranh không chỉ là một tác phẩm hội họa, mà còn là tiếng nói rất riêng của một trái tim đặc biệt. Trong từng nét vẽ còn vụng về ấy là sự hồn nhiên, là niềm vui, là khát khao được yêu thương và được nhìn thấy như bao người khác.",
      "Khi ngắm nhìn bức tranh này, chúng ta không chỉ thấy một ngôi sao hay những chú gà nhỏ. Chúng ta thấy được sự cố gắng, sự sáng tạo và một thế giới nội tâm trong trẻo của một em nhỏ khuyết tật đang dùng nghệ thuật để kể cho mọi người nghe về những điều em yêu quý.",
      "Mỗi nét vẽ là một điều em muốn nói. Mỗi bức tranh là một cánh cửa mở ra thế giới đầy yêu thương của các em. Chỉ cần dành một chút thời gian lắng nghe, chúng ta sẽ thấy trong những gam màu giản dị ấy luôn có những ước mơ rất đẹp đang chờ được chắp cánh.",
    ],
    tag: "Hy vọng",
    image: "/artworks/artwork_1.png",
    year: "2024",
    material: "Sáp màu trên giấy vẽ",
    donorCount: 42,
    hasDrawing: true,
  },
  {
    id: 2,
    title: "Tự Hào Việt Nam",
    artistName: "Nguyễn Cao Phong",
    artistAge: 16,
    birthYear: 2010,
    location: "Thôn Đoàn Kết",
    artistAvatar: "/artists/artist_6.jpg",
    artistStory:
      "Nguyễn Cao Phong là học sinh người Kinh đến từ thôn Đoàn Kết. Em mắc khuyết tật trí tuệ, khuyết tật ngôn ngữ, tăng động giảm chú ý và gặp khó khăn trong việc kiểm soát hành vi. So với nhiều bạn khác, hoàn cảnh gia đình em ổn định hơn.",
    dream:
      "Em mong muốn mọi đứa trẻ đều được sống trong bình yên, được yêu thương và được tự hào về nơi mình thuộc về.",
    description:
      "Đất nước hiện lên qua lá cờ thân thuộc, qua mái nhà bình yên, qua ánh nắng ấm áp mỗi ngày.",
    fullStory: [
      "Nhìn vào bức tranh của Phong, hình ảnh lá cờ đỏ sao vàng được đặt ở vị trí trung tâm, nổi bật nhất trên trang giấy. Xung quanh là những trái tim xanh, ánh mặt trời rực rỡ, ngôi nhà nhỏ và những nét vẽ đầy màu sắc. Tất cả kết hợp lại như một câu chuyện giản dị nhưng chứa đựng rất nhiều yêu thương.",
      "Có lẽ trong thế giới của em, đất nước không phải là những khái niệm lớn lao hay những bài học khô khan. Đất nước hiện lên qua lá cờ thân thuộc, qua mái nhà bình yên, qua ánh nắng ấm áp mỗi ngày và qua những tình cảm chân thành mà em dành cho mọi người xung quanh. Những trái tim xuất hiện nhiều lần trong tranh như thay lời muốn nói về một trái tim luôn biết yêu thương và trân trọng những điều tốt đẹp. Màu sắc trong tranh được tô một cách hồn nhiên, không theo khuôn mẫu, nhưng chính điều đó lại làm nên vẻ đẹp rất riêng. Mỗi gam màu, mỗi nét bút đều chứa đựng sự cố gắng và cảm xúc chân thật của em. Không cần những đường nét hoàn hảo, bức tranh vẫn khiến người xem cảm nhận được niềm vui, sự trong trẻo và niềm tự hào nhỏ bé nhưng vô cùng đáng quý.",
      "Nhìn vào bức tranh này, chúng ta thấy một thế giới được xây dựng bằng những điều giản dị nhất: một lá cờ, một ngôi nhà, một mặt trời và những trái tim yêu thương. Đó cũng chính là những điều mà mọi đứa trẻ đều mong muốn được gìn giữ — được sống trong bình yên, được yêu thương và được tự hào về nơi mình thuộc về.",
    ],
    tag: "Tự hào",
    image: "/artworks/artwork_2.png",
    year: "2024",
    material: "Sáp màu trên giấy vẽ",
    donorCount: 56,
    hasDrawing: true,
  },
  {
    id: 3,
    title: "Mái Nhà Bình Yên",
    artistName: "Hà Quỳnh Chi",
    artistAge: 16,
    birthYear: 2012,
    location: "Khu Trung Tâm",
    artistAvatar: "/artists/artist_11.png",
    artistStory:
      "Hà Quỳnh Chi là học sinh dân tộc Tày sinh sống tại khu Trung Tâm. Em mắc khuyết tật trí tuệ, tự kỷ và tăng động giảm chú ý. Gia đình em thuộc diện khó khăn khi bố mẹ đều chưa có việc làm ổn định, ảnh hưởng đến điều kiện chăm sóc và học tập của em.",
    dream:
      "Hạnh phúc đôi khi không phải là những điều lớn lao, mà đơn giản chỉ là được trở về nhà sau một ngày dài, nhìn thấy những người mình yêu thương và cảm nhận sự bình yên quen thuộc.",
    description:
      "Ngôi nhà hiện lên với những gam màu tươi sáng, như một biểu tượng của sự an toàn và yêu thương.",
    fullStory: [
      "Bức tranh của Chi mang đến cảm giác nhẹ nhàng và ấm áp ngay từ cái nhìn đầu tiên. Trên trang giấy trắng là một ngôi nhà nhỏ với mái xanh, tường cam rực rỡ và bên cạnh là một chú chó đáng yêu đang ngồi ngoan ngoãn. Không có quá nhiều chi tiết, nhưng từng hình ảnh đều như đang kể một câu chuyện rất riêng về thế giới của em.",
      "Ngôi nhà hiện lên với những gam màu tươi sáng, như một biểu tượng của sự an toàn và yêu thương. Đó có thể là nơi em được chăm sóc, được lắng nghe và được là chính mình. Trong suy nghĩ của nhiều đứa trẻ, hạnh phúc đôi khi không phải là những điều lớn lao, mà đơn giản chỉ là được trở về nhà sau một ngày dài, nhìn thấy những người mình yêu thương và cảm nhận sự bình yên quen thuộc. Bên cạnh ngôi nhà là hình ảnh chú chó nhỏ với khuôn mặt vui vẻ. Chú chó ấy giống như một người bạn thân thiết luôn ở bên cạnh em, mang đến niềm vui, sự đồng hành và cảm giác được yêu thương vô điều kiện. Đôi mắt tròn xoe và nụ cười nhỏ xinh của chú khiến cả bức tranh trở nên sống động hơn, như thể em đang muốn chia sẻ với mọi người về một người bạn rất đặc biệt trong cuộc sống của mình.",
      "Điều đáng yêu nhất ở bức tranh không nằm ở kỹ thuật vẽ hay những đường nét hoàn hảo, mà nằm ở sự chân thành. Qua những nét bút giản dị, Chi đã vẽ nên một thế giới nhỏ bé nhưng đầy đủ những điều quý giá nhất: một mái nhà để trở về và một người bạn để yêu thương.",
    ],
    tag: "Gia đình",
    image: "/artworks/artwork_3.png",
    year: "2024",
    material: "Màu nước trên giấy",
    donorCount: 78,
    hasDrawing: true,
  },
  {
    id: 4,
    title: "Bàn Tay Che Chở",
    artistName: "Trịnh Ngọc Huy",
    artistAge: 15,
    birthYear: 2011,
    location: "Thôn Ngòi Chán",
    artistAvatar: "/artists/artist_4.jpg",
    artistStory:
      "Trịnh Ngọc Huy là học sinh dân tộc Sán Chay ở thôn Ngòi Chán. Em mắc khuyết tật trí tuệ, khuyết tật ngôn ngữ, khuyết tật thị giác và rối loạn phổ tự kỷ. Gia đình thuộc diện khó khăn khi mẹ thường xuyên đau ốm, còn bố không có công việc ổn định.",
    dream:
      "Trong cuộc sống, ai cũng cần một bàn tay nâng đỡ, một nơi để cảm thấy an toàn và những người để yêu thương.",
    description:
      "Bàn tay lớn ở trung tâm giống như một vòng tay che chở, ôm lấy mọi điều quan trọng trong thế giới của em.",
    fullStory: [
      "Bức tranh của Huy gây ấn tượng ngay từ ánh nhìn đầu tiên bởi hình ảnh một bàn tay màu cam thật lớn ở giữa trang giấy. Xung quanh bàn tay là lá cờ đỏ sao vàng, những hình người nhỏ bé và một công trình được tô màu đen. Dù được thể hiện bằng những nét vẽ đơn giản, bức tranh lại mang đến nhiều cảm xúc về sự bảo vệ, yêu thương và niềm tự hào.",
      "Bàn tay lớn ở trung tâm giống như một vòng tay che chở, ôm lấy mọi điều quan trọng trong thế giới của em. So với những nhân vật nhỏ xung quanh, bàn tay hiện lên mạnh mẽ và vững chãi, như biểu tượng của sự an toàn, của những người luôn âm thầm bảo vệ và đồng hành cùng em trong cuộc sống. Lá cờ đỏ sao vàng xuất hiện ở góc tranh như một điểm nhấn đặc biệt. Đó không chỉ là hình ảnh của quê hương, đất nước mà còn thể hiện niềm tự hào và sự gắn bó với nơi em đang sống. Dù cách thể hiện còn hồn nhiên, nhưng có thể cảm nhận được tình cảm chân thành mà em dành cho những điều thân thuộc xung quanh mình. Những hình người nhỏ bé được vẽ trong tranh chính là những người thân trong gia đình, bạn bè. Tất cả đều hiện diện dưới sự bao bọc của bàn tay lớn, tạo nên cảm giác bình yên và được chở che.",
      "Điều đặc biệt nhất của bức tranh nằm ở cách Huy lựa chọn hình ảnh để kể câu chuyện của mình. Em không dùng nhiều màu sắc hay chi tiết phức tạp, nhưng lại truyền tải được một thông điệp rất đẹp: trong cuộc sống, ai cũng cần một bàn tay nâng đỡ, một nơi để cảm thấy an toàn và những người để yêu thương.",
    ],
    tag: "Yêu thương",
    image: "/artworks/artwork_4.png",
    year: "2024",
    material: "Bút màu dạ và sáp dầu",
    donorCount: 88,
    hasDrawing: true,
  },
  {
    id: 5,
    title: "Hướng Dương Đón Nắng",
    artistName: "Hoàng Ngọc Tú",
    artistAge: 17,
    birthYear: 2009,
    location: "Thôn Đát Lụa",
    artistAvatar: "/artists/artist_8.jpg",
    artistStory:
      "Hoàng Ngọc Tú là học sinh dân tộc Dao ở thôn Đát Lụa. Em mắc khuyết tật trí tuệ, khuyết tật ngôn ngữ, chậm phát triển thể chất, tăng động giảm chú ý và không làm chủ được hành vi. Gia đình rất khó khăn, có hai người con bị khuyết tật nặng, bố mẹ không có việc làm ổn định, nhà ở xa lớp học và không có phương tiện đưa đón.",
    dream:
      "Thế giới của em được tạo nên từ trí tưởng tượng, từ những điều em yêu thương và cảm nhận bằng cả trái tim.",
    description:
      "Một bông hoa lớn, một mái nhà bình yên, ánh mặt trời ấm áp – đó có lẽ là những điều khiến em hạnh phúc.",
    fullStory: [
      "Trong bức tranh của Tú, hình ảnh một bông hoa hướng dương thật lớn đang vươn mình đón nắng. Phía trên là ông mặt trời với nụ cười rạng rỡ, như đang dịu dàng nhìn ngắm mọi thứ xung quanh. Bên dưới là một ngôi nhà nhỏ, một cái cây xanh, những cánh chim đang bay và lá cờ đỏ sao vàng tung bay trong gió.",
      "Tú đã tô màu theo cách riêng của mình. Lá hoa có màu đỏ, nhụy hoa có màu xanh, và chính những điều tưởng như khác lạ ấy lại khiến bức tranh trở nên đặc biệt. Bởi với các em, thế giới không nhất thiết phải giống như chúng ta vẫn nghĩ. Thế giới của các em được tạo nên từ trí tưởng tượng, từ những điều các em yêu thương và cảm nhận bằng cả trái tim.",
      "Nhìn bức tranh này, chúng ta có thể cảm nhận được một điều rất giản dị: Tú đang nhìn cuộc sống bằng sự vui vẻ và tin yêu. Một bông hoa lớn, một mái nhà bình yên, ánh mặt trời ấm áp – đó có lẽ là những điều khiến em cảm thấy hạnh phúc và an toàn.",
      "Có những lúc chúng ta nghĩ rằng mình đang giúp các em nhìn thấy vẻ đẹp của cuộc sống. Nhưng thực ra, chính những bức tranh như thế này lại nhắc chúng ta rằng hạnh phúc đôi khi chỉ đến từ những điều rất nhỏ bé: một ngày có nắng, một mái nhà để trở về và một trái tim vẫn luôn biết yêu thương.",
    ],
    tag: "Thiên nhiên",
    image: "/artworks/artwork_5.png",
    year: "2024",
    material: "Sáp màu trên giấy vẽ",
    donorCount: 35,
    hasDrawing: true,
  },
  {
    id: 6,
    title: "Trái Tim Yêu Thương",
    artistName: "Hà Kim Anh",
    artistAge: 15,
    birthYear: 2011,
    location: "Thôn Ngòi Khang",
    artistAvatar: "/artists/artist_9.jpg",
    artistStory:
      "Hà Kim Anh là học sinh dân tộc Tày, sinh sống tại thôn Ngòi Khang. Em mắc khuyết tật trí tuệ, tăng động giảm chú ý và gặp khó khăn trong việc kiểm soát hành vi. Gia đình thuộc diện khó khăn, chưa có công việc và nguồn thu nhập ổn định.",
    dream:
      "Trẻ em thường có cách thể hiện tình cảm rất đơn giản. Các em không cần những lời nói hoa mỹ hay những thông điệp lớn lao. Đôi khi, chỉ một trái tim được tô thật cẩn thận cũng đủ để nói lên rất nhiều điều.",
    description:
      "Một trái tim lớn đến vậy như muốn nói rằng trong thế giới của Kim Anh luôn có chỗ cho sự yêu thương.",
    fullStory: [
      "Bức tranh của Kim Anh khiến người xem chú ý ngay từ cái nhìn đầu tiên bởi một trái tim thật lớn được đặt ở chính giữa trang giấy. Không có nhiều chi tiết cầu kỳ, cũng không cần những hình ảnh phức tạp, Kim Anh đã chọn vẽ điều quan trọng nhất với mình: một trái tim ngập tràn yêu thương.",
      "Bên trong trái tim ấy là rất nhiều nét màu đỏ được tô kín bằng sự chăm chút và kiên nhẫn. Xen giữa là những mảng màu xanh lá, xanh dương và nâu nhỏ bé. Có thể với nhiều người đó chỉ là những nét màu ngẫu hứng, nhưng cũng có thể đó là cách Kim Anh gom những điều em yêu thích vào cùng một nơi – màu của cây cối, bầu trời, mặt đất và những điều đẹp đẽ xung quanh mình.",
      "Điều đặc biệt ở bức tranh không nằm ở kỹ thuật vẽ, mà nằm ở cảm xúc mà nó mang lại. Một trái tim lớn đến vậy như muốn nói rằng trong thế giới của Kim Anh luôn có chỗ cho sự yêu thương, cho những điều tốt đẹp và cho những người em quý mến. Nhìn bức tranh, chúng ta chợt nhận ra rằng trẻ em thường có cách thể hiện tình cảm rất đơn giản. Các em không cần những lời nói hoa mỹ hay những thông điệp lớn lao. Đôi khi, chỉ một trái tim được tô thật cẩn thận cũng đủ để nói lên rất nhiều điều.",
    ],
    tag: "Yêu thương",
    image: "/artworks/artwork_6.png",
    year: "2024",
    material: "Bút lông màu nước",
    donorCount: 62,
    hasDrawing: true,
  },
  {
    id: 7,
    title: "Thế Giới Sắc Đỏ",
    artistName: "Hoàng Ngọc Chiến",
    artistAge: 12,
    birthYear: 2014,
    location: "Thôn Ngòi Ngần",
    artistAvatar: "/artists/artist_5.png",
    artistStory:
      "Hoàng Ngọc Chiến là học sinh dân tộc Dao, sinh sống tại thôn Ngòi Ngần. Em mắc bệnh tim bẩm sinh, khuyết tật trí tuệ, khuyết tật ngôn ngữ, khuyết tật thị giác và tự kỷ. Gia đình em rơi vào hoàn cảnh đặc biệt khó khăn khi ngôi nhà bị cuốn trôi hoàn toàn sau cơn bão Yagi. Mẹ em thường xuyên phải điều trị bệnh, còn bố không có việc làm ổn định.",
    dream:
      "Điều đẹp nhất trong bức tranh này không nằm ở những gì được vẽ ra, mà nằm ở niềm hạnh phúc rất giản dị của Chiến khi được tự do thể hiện thế giới trong mắt mình.",
    description:
      "Điều đáng quý nằm ở cách em tự do kể câu chuyện của mình trên trang giấy, bằng những nét vẽ hồn nhiên nhất.",
    fullStory: [
      "Trong bức tranh của Chiến, màu đỏ xuất hiện ở khắp nơi. Bông hoa đỏ, chiếc cột đỏ và cả những nét màu được tô thật đậm như thể đó là màu sắc mà em yêu thích nhất. Không có những quy tắc về màu sắc hay bố cục, Chiến chỉ đơn giản vẽ theo những gì mình muốn và tô bằng những màu khiến em vui.",
      "Ở góc tranh là những nét chì còn dang dở, có thể là ngôi nhà, chiếc xe hay một hình ảnh nào đó nhưng có lẽ điều đó không quá quan trọng. Điều đáng quý nằm ở cách em tự do kể câu chuyện của mình trên trang giấy, bằng những nét vẽ hồn nhiên và chân thật nhất. Những mảng màu còn lem nhẹ, những nét tô chưa đều hay những đường vẽ còn vụng về lại khiến bức tranh trở nên đặc biệt. Bởi đó là dấu vết của sự tập trung, của niềm háo hức và niềm vui khi được cầm bút sáng tạo theo cách riêng của mình.",
      "Nhìn bức tranh của Chiến, chúng ta như được trở về với tuổi thơ – khi một tờ giấy trắng và vài hộp màu đã đủ để tạo nên cả một thế giới. Một thế giới không cần hoàn hảo, chỉ cần có trí tưởng tượng, sự tự do và niềm vui. Có lẽ điều đẹp nhất trong bức tranh này không nằm ở những gì được vẽ ra, mà nằm ở niềm hạnh phúc rất giản dị của Chiến khi được tự do thể hiện thế giới trong mắt mình.",
    ],
    tag: "Ước mơ",
    image: "/artworks/artwork_7.png",
    year: "2024",
    material: "Màu nước và sáp dầu",
    donorCount: 94,
    hasDrawing: true,
  },
  {
    id: 8,
    title: "Bàn Tay Sắc Màu",
    artistName: "Lý Thị Huệ",
    artistAge: 17,
    birthYear: 2009,
    location: "Thôn Khe May, xã Yên Bình",
    artistAvatar: "/artists/artist_7.jpg",
    artistStory:
      "Lý Thị Huệ là học sinh dân tộc Dao ở thôn Khe May, xã Yên Bình. Em bị khuyết tật trí tuệ, khuyết tật ngôn ngữ, tự kỷ và thường xuyên run chân tay. Gia đình rất khó khăn, đông con, bố mẹ không có việc làm ổn định. Nhà cách lớp học khoảng 14 km và không có phương tiện đưa đón nên việc đến lớp của em gặp nhiều trở ngại.",
    dream:
      "Bằng những nét vẽ trong trẻo nhất, Huệ đã bộc lộ khát vọng hạnh phúc, mong muốn dùng chính đôi bàn tay của mình để chạm vào thế giới, để sẻ chia và lan tỏa sự ấm áp đến mọi người xung quanh.",
    description:
      "Bao bọc lấy bàn tay ấy là những trái tim đỏ thắm lớn nhỏ đang bay lượn tự do, tạo nên năng lượng tích cực.",
    fullStory: [
      "Nhìn vào bức tranh của Huệ, người xem không khỏi mỉm cười trước một ý tưởng quá đỗi thương yêu và sáng tạo. Biểu tượng trung tâm chính là bàn tay của em đặt lên vẽ với lòng bàn tay ấm áp mang nhiều màu sắc. Qua góc nhìn hồn nhiên của em, mỗi ngón tay như đại diện cho một cá tính, một sự đa dạng của cuộc sống, cùng chung sống hòa thuận và vui vẻ trên một bàn tay gắn kết.",
      "Bao bọc lấy bàn tay ấy là những trái tim đỏ thắm lớn nhỏ đang bay lượn tự do, tạo nên một không gian ngập tràn năng lượng tích cực. Đây không đơn thuần là những hình vẽ, mà chính là ước mơ mộc mạc của em về một thế giới được lấp đầy bởi tình yêu thương vô điều kiện. Những nét sáp màu có chỗ đậm chỗ nhạt, đôi chỗ còn lem viền một cách đầy bản năng, nhưng chính sự thoải mái, không gò bó ấy lại thể hiện một tâm hồn hoàn toàn tự do. Em tự do chọn lựa sắc màu mình yêu, tự do gieo rắc những trái tim quanh mình mà không cần theo bất cứ một quy chuẩn hay khuôn mẫu khô khan nào.",
      "Bằng những nét vẽ trong trẻo nhất, Huệ đã bộc lộ khát vọng hạnh phúc, mong muốn dùng chính đôi bàn tay của mình để chạm vào thế giới, để sẻ chia và lan tỏa sự ấm áp đến mọi người xung quanh.",
    ],
    tag: "Ước mơ",
    image: "/artworks/artwork_8.png",
    year: "2024",
    material: "Bút chì màu và sáp dầu",
    donorCount: 110,
    hasDrawing: true,
  },
  {
    id: 9,
    title: "Tổ Ấm Bình Yên",
    artistName: "Hoàng Thị Huế",
    artistAge: 17,
    birthYear: 2009,
    location: "Thôn Làng Giữa",
    artistAvatar: "/artists/artist_2.jpg",
    artistStory:
      "Hoàng Thị Huế là học sinh dân tộc Tày đến từ thôn Làng Giữa. Em mắc khuyết tật trí tuệ, chậm phát triển thể chất và suy dinh dưỡng. Gia đình có hoàn cảnh khó khăn khi cả bố và mẹ đều chưa có việc làm ổn định, ảnh hưởng lớn đến điều kiện chăm sóc và học tập của em.",
    dream:
      "Qua những nét vẽ mộc mạc của Huế, chúng ta nhận ra rằng hạnh phúc đôi khi không đến từ những điều lớn lao. Với một đứa trẻ, hạnh phúc có thể chỉ đơn giản là một ngôi nhà thân quen, một ngày nhiều nắng và những người yêu thương luôn ở bên cạnh.",
    description:
      "Mái nhà để trở về, là cây cối và hoa lá trong sân, là lá cờ Tổ quốc và bầu trời đầy nắng ấm áp.",
    fullStory: [
      "Trong bức tranh của Huế, hiện lên một khung cảnh thật gần gũi và bình yên. Giữa trang giấy trắng, ngôi nhà tường vàng mái đỏ hiện lên thật vững chãi và sống động, không chỉ là nơi che mưa che nắng mà dường như còn là biểu tượng của một tổ ấm ngập tràn niềm vui. Không gian sống ấy thật hài hòa, được ôm ấp bởi hình ảnh một cây trĩu quả và hàng cỏ hoa đón nắng dưới mặt đất.",
      "Mỗi chi tiết trong tranh đều được Huế vẽ theo cách rất riêng của mình. Màu sắc được tô hồn nhiên, có chỗ đậm, chỗ nhạt, đôi khi còn lem ra ngoài nét vẽ. Nhưng chính sự tự nhiên ấy lại khiến bức tranh trở nên đáng yêu và chân thật. Không có những quy tắc hay khuôn mẫu nào, Huế chỉ đơn giản vẽ nên những điều khiến em cảm thấy vui và hạnh phúc. Nhìn vào bức tranh, người xem dễ dàng cảm nhận được tình yêu của Huế dành cho những điều thân thuộc xung quanh mình. Đó là mái nhà để trở về, là cây cối và hoa lá trong sân, là lá cờ Tổ quốc và bầu trời đầy nắng. Tất cả hiện lên giản dị nhưng đủ để tạo nên một thế giới nhỏ ngập tràn sự bình yên.",
      "Qua những nét vẽ mộc mạc của Huế, chúng ta nhận ra rằng hạnh phúc đôi khi không đến từ những điều lớn lao. Với một đứa trẻ, hạnh phúc có thể chỉ đơn giản là một ngôi nhà thân quen, một ngày nhiều nắng và những người yêu thương luôn ở bên cạnh.",
    ],
    tag: "Gia đình",
    image: "/artworks/artwork_9.png",
    year: "2024",
    material: "Sáp màu và bút lông dạ",
    donorCount: 52,
    hasDrawing: true,
  },
  {
    id: 10,
    title: "Mái Nhà Mơ Ước",
    artistName: "Lê Ngọc Mai",
    artistAge: 12,
    birthYear: 2014,
    location: "Thôn Ngòi Khang",
    artistAvatar: "/artists/artist_3.jpg",
    artistStory:
      "Lê Ngọc Mai là học sinh người Kinh, sinh sống tại thôn Ngòi Khang. Do sinh non, em gặp nhiều vấn đề về sức khỏe như khuyết tật trí tuệ, tăng động giảm chú ý, suy dinh dưỡng và mắc bệnh đường tiêu hóa mãn tính. Gia đình em gặp nhiều khó khăn về kinh tế, công việc không ổn định và mẹ thường xuyên đau ốm.",
    dream:
      "Mỗi nét vẽ đều là cách em kể câu chuyện của riêng mình, bằng những gì em nhìn thấy, yêu thích và mơ ước. Qua những nét vẽ hồn nhiên này, cho thấy đó không phải là những điều lớn lao, nhưng lại là những điều khiến tuổi thơ trở nên thật đẹp.",
    description:
      "Bức tranh em vẽ không chỉ là một ngôi nhà, mà là thấy cả một ước mơ về sự bình yên và hạnh phúc của em.",
    fullStory: [
      "Bức tranh của Ngọc Mai mang đến cảm giác bình yên ngay từ cái nhìn đầu tiên. Bức tranh em vẽ không chỉ là một ngôi nhà, mà là thấy cả một ước mơ về sự bình yên và hạnh phúc của em. Ngôi nhà vươn cao với mái màu xanh da trời, đứng vững chãi giữa đất trời giống như một tổ ấm che chở cho em trước mọi giông bão. Thế giới của em là một không gian ngập tràn năng lượng ấm áp từ sắc tường vàng, nơi tình yêu thương luôn hiện hữu qua khung cửa nhỏ nhắn.",
      "Xung quanh ngôi nhà là những tán cây trĩu quả, bầu trời trong xanh và những cánh chim đang bay lượn. Phía trên cao, ông mặt trời mỉm cười rạng rỡ như đang tỏa những tia nắng ấm áp xuống khu vườn nhỏ của em. Mọi thứ trong tranh đều giản dị nhưng lại khiến người xem cảm nhận được một không gian đầy niềm vui và sức sống.",
      "Ngọc Mai tô màu theo cách rất tự nhiên. Có những nét màu còn chưa đều, có những đường vẽ còn vụng về và ngây ngô, nhưng chính điều đó lại làm cho bức tranh trở nên đáng yêu hơn. Mỗi nét vẽ đều là cách em kể câu chuyện của riêng mình, bằng những gì em nhìn thấy, yêu thích và mơ ước. Qua những nét vẽ hồn nhiên này, cho thấy đó không phải là những điều lớn lao, nhưng lại là những điều khiến tuổi thơ trở nên thật đẹp.",
    ],
    tag: "Ước mơ",
    image: "/artworks/artwork_10.png",
    year: "2024",
    material: "Sáp màu trên giấy vẽ",
    donorCount: 124,
    hasDrawing: true,
  },
  {
    id: 11,
    title: "Tác phẩm trưng bày trực tiếp",
    artistName: "La Quốc Bảo",
    artistAge: 22,
    birthYear: 2004,
    location: "Thôn Làng Giữa",
    artistAvatar: "/artists/artist_1.jpg",
    artistStory:
      "La Quốc Bảo là học sinh dân tộc Tày, sinh sống tại thôn Làng Giữa. Em bị khuyết tật vận động, khuyết tật ngôn ngữ và teo cơ co cứng, gây nhiều khó khăn trong sinh hoạt cũng như học tập. Gia đình em thuộc diện khó khăn, trong khi mẹ em vừa gặp tai nạn nên cuộc sống càng thêm nhiều vất vả.",
    dream:
      "Em mong muốn vượt qua những khó khăn thể chất để tự lập và đỡ đần cho người mẹ thân yêu gánh vác gia đình.",
    description: "Tác phẩm đang được trưng bày trực tiếp tại triển lãm vật lý.",
    fullStory: [
      "La Quốc Bảo là học sinh dân tộc Tày, sinh sống tại thôn Làng Giữa. Em bị khuyết tật vận động, khuyết tật ngôn ngữ và teo cơ co cứng, gây nhiều khó khăn trong sinh hoạt cũng như học tập. Gia đình em thuộc diện khó khăn, trong khi mẹ em vừa gặp tai nạn nên cuộc sống càng thêm nhiều vất vả.",
    ],
    tag: "Nghị lực",
    image: "",
    year: "2024",
    material: "Tranh sáp dầu",
    donorCount: 0,
    hasDrawing: false,
  },
  {
    id: 12,
    title: "Tác phẩm trưng bày trực tiếp",
    artistName: "Nông Anh Minh",
    artistAge: 8,
    birthYear: 2018,
    location: "Thôn Làng Giữa",
    artistAvatar: "/artists/artist_12.jpg",
    artistStory:
      "Nông Anh Minh là học sinh người Kinh đến từ thôn Làng Giữa. Em mắc khuyết tật trí tuệ, tự kỷ, tăng động giảm chú ý và gặp khó khăn trong việc kiểm soát hành vi. Gia đình em thuộc diện khó khăn, bố mẹ không có công việc ổn định nên việc chăm sóc và hỗ trợ em trong học tập còn nhiều hạn chế.",
    dream:
      "Em ước mơ có một môi trường học tập vui vẻ, luôn tràn ngập sự thấu hiểu, sẻ chia và yêu thương từ mọi người.",
    description: "Tác phẩm đang được trưng bày trực tiếp tại triển lãm vật lý.",
    fullStory: [
      "Nông Anh Minh là học sinh người Kinh đến từ thôn Làng Giữa. Em mắc khuyết tật trí tuệ, tự kỷ, tăng động giảm chú ý và gặp khó khăn trong việc kiểm soát hành vi. Gia đình em thuộc diện khó khăn, bố mẹ không có công việc ổn định nên việc chăm sóc và hỗ trợ em trong học tập còn nhiều hạn chế.",
    ],
    tag: "Ước mơ",
    image: "",
    year: "2024",
    material: "Sáp màu trên giấy vẽ",
    donorCount: 0,
    hasDrawing: false,
  },
];
