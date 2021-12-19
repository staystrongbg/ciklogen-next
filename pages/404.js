import Link from 'next/link';
const Error = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        fontFamily: 'Roboto Slab',
        color: '#f1f1f4',
        letterSpacing: '1.2px',
        marginTop: '200px',
      }}
    >
      <h1>There's no such page...</h1>
      <Link href='/'>
        <a>go Home</a>
      </Link>
      <style jsx>
        {`
          a {
            color: #000;
            margin-top: 20px;
          }
        `}
      </style>
    </div>
  );
};

export default Error;
