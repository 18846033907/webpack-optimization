
import {useState} from 'react'

const LoadingButton = (props) => {
  const { onClick } = props;
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    setLoading(true);
    const res= onClick();
    if(res){
        console.log('done')
        setLoading(false);
    }
  }
  return <button onClick={handleClick}>{loading ? "loading" : "click"}</button>;
};
export default LoadingButton
