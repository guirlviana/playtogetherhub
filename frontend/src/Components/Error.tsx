type Props = {
  error: string;
};

function Error({ error }: Props) {
  return (
    <div className="border-l-4 border-red-700 bg-red-500 rounded-md">
      <p className="text-white p-2">{error}</p>
    </div>
  );
}

export default Error;
