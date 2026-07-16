import { Flex, Card, Avatar, Typography, Rate } from "antd";
const { Meta } = Card;

const {  Title, Paragraph } = Typography;


function App() {
const cards=[
  {
    name: "Sarah Johnson",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5,
    review: "In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers."
  },
  {
    name: "Michael Chen",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 5,
    review: "In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers."
  },
  {
    name: "Emily rodriguez",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 5,
    review: "In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers."
  }
]

  return (
    <div style={{textAlign: "center", backgroundColor: "#040405", padding: "100px"}}>
   
    <Title style={{color:"white"}} level={2}>Trusted by <span style={{color: "#ef6a1a"}}>Innovative</span> Companies</Title>

    <Paragraph style={{color:"gray", fontSize: "14px", marginTop: "10px"}}>
      Don't just take our word for it. Here's what our customers have to say about Sassland.
    </Paragraph>


        
  
     

      <Flex justify="center" align="center"  gap="medium">
{cards.map((card, index) => (
  <Card
    key={index}
    style={{ width: 320, height: 260, backgroundColor: "#1e1e1e", borderRadius: "10px", border: "none" }}
  >
    <Rate defaultValue={card.rating} style={{ color: "#ef6a1a" }} />
    <Paragraph style={{color:"white", fontSize: "14px", marginTop: "10px"}}>
      " {card.review} "
    </Paragraph>
    <div style={{display: "flex", gap: "10px", marginTop: "10px"}}>
         <Avatar src={card.avatar} size={56} />
  <Title style={{color:"white", marginTop: "10px"}} level={5}>{card.name}</Title>
    </div>
  
  </Card>
))}

      </Flex>
    </div>

  )
}

export default App
