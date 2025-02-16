// This is how Data can be sent via Link of React Route Dom using State prop  


<Link
   to={`/edit-court/${record._id}`}
   state={record}>
   <Button icon={<EditOutlined />} style={{ marginRight: 8 }} />
</Link>
