import React from 'react';

interface ShowModalProps {
      visible: any;
      onClose: any;
      deviceArrays: any;
}

const Modal: React.FC<ShowModalProps> = ({ visible, onClose, deviceArrays }) => {
      // console.log('Modal Devicearrays: ', deviceArrays);


      if (!visible) return null;


      return (
            <div onClick={onClose} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
                  <div className="p-5 rounded-3xl  bg-gray-800 opacity-80">
                        <button onClick={onClose} className='text-red-500 font-bold text-xl'>X</button>
                        <ul className='mt-6'>
                              {deviceArrays.map((item: any, key: any) => (
                                    <li className='bg-gray-600 px-3 hover:bg-gray-950 rounded cursor-pointer' key={key}>{item}</li>
                              ))}
                        </ul>

                  </div>
            </div>
      );
};
export default Modal;