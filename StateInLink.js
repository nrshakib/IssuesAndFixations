// This is how Data can be sent via Link of React Route Dom using State prop  
<Link
   to={`/product-details/${record._id}`}
   state={record}>
   <Button icon={<EditOutlined />} style={{ marginRight: 8 }} />
</Link>

// This is how the data should be received
import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const location = useLocation();
  const details = location.state?.record || "No data received";

  return (
    <div>
      <h1>ProductDetails Page</h1>
      <p>{details}</p>
    </div>
  );
};
export default ProductDetails;
