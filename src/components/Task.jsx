import React from 'react'

const Task = () => {
  return (
    <div className="bg-gray-500 min-h-screen flex items-center justify-center p-4">
      <div className="bg-purple-200 rounded-lg shadow-lg w-full max-w-full">
        
        <div className="p-4 border-b">
          <h2 className="text-2xl font-bold flex items-center justify-center ">My Earnings</h2>
          <button className="absolute top-8 right-8    px-3 py-1 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600">
          My Profile
        </button>
          <div className="flex justify-between items-center mt-2">
            <div className="text-red-500 font-semibold">3982</div>
            <div className="text-green-600 font-semibold">₹2875.00</div>
            <div className="bg-green-500 mt-3 text-white rounded-full px-2 py-1 text-md">Vijay</div>
          </div>
          <div className="mt-4">
            <h3 className="text-md font-bold">Earnings Statistics</h3>
            <p className="text-sm">Total Earnings: ₹2875.00</p>
            <div className="flex justify-between text-lg mt-2">
              <p>Self Earnings</p>
              <p>₹8.00</p>
            </div>
            <div className="flex justify-between text-lg mt-2">
              <p>Referral Earnings</p>
              <p>₹2867.00</p>
            </div>
            <div className="flex justify-between text-lg mt-2">
              <p>Reward Earnings</p>
              <p>₹0.00</p>
            </div>
          </div>
        </div>

   
        <div className="p-4 border-b flex justify-around bg-gray-100">
          <button className="text-orange-500 font-semibold">Self</button>
          <button className="text-white bg-orange-500 font-bold border-2 rounded-lg border-orange-500">Referral</button>
          <button className="text-orange-500 font-semibold">Reward</button>
        </div>

      
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full"
                src="data:image/png;base64,iVBORw0KGgoAAAANSU
                hEUgAAAJQAAACUCAMAAABC4vDmAAABJlBMVEUAAAD4+PjX19c
                AAAP8/PwcHBxxcXHo6Ojy8vIWFhbJycn/xQH/8QAAAAb+0ADtv
                ABmTQj5wACybwsRAAX+zAGOawL+3AD/7AEQBwX/6AH+1gFGLwrg
                lQIeCwn+4wH/yQD+9gDvqwDvyQhLLgq9eAdNKQjLkwr+vQD5sAD
                GhgrjnQjckAm7iwzswQf8twD//wSIiIj2pADwtAFQRQjQyQ4YGQd
                XVgtcZQ0PFAbMugh1VwOenp59fX0UDwGVYQ8hFQclHQmkaguEVBA0
                JAlVOAfymgdNOgnfiQg8IwNnPgo0EQviqAlzRQiPVAMrGgTYqgvNfAi
                wfQeWeAdxXwevjAa+og/m1ghAPwrVtg8vNQuxpwermBG+uRCOkQ1/egu
                Yhg4kJgU5LwYXdDbWAAAKHUlEQVR4nO2cC1PbSBKAtZndTfZGHiMykdD
                gaCTbQbId5JXIg3CHHRtDzEEgbALLbW4f/P8/cd0zI2NIlrINVezWqasSNNM93d/0PCWqs
                L75C4p13wBfkxJqVimhZpUSalYpoWaVvwfUt/ckN0I9uB95dAPUt/9c+e4+ZOVffw716NG
                P1v3I9zdAPfz+rwf18EEJVUKVUCVUCVVClVAlVAlVQpVQJVQJVUKVUCVUCfV/CUVA4P9rN
                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
                KqO5D8I8B3QD115ASalYpoWaVEmpWKaFmlRJqVimhZpX/AVO50zEEYsxZAAAAAElFTkSuQmCC"
                alt="Referral"
              />
              <div className="ml-3">
                <p className="font-semibold">Vijay</p>
                <p className="text-gray-500 text-sm">3s</p>
              </div>
            </div>
            <div className="text-red-500 font-semibold">₹2.00</div>
          </div>
          <p className="text-gray-400 text-sm mt-2">Sat Sep 17 2024</p>
        </div>

   
        <div className="p-4 rounded-lg">
          <div className="flex justify-between text-lg">
            <p>Sr. No</p>
            <p>69</p>
          </div>
          <div className="flex justify-between text-lg mt-2">
            <p>Full Name</p>
            <p>Vijay Sharma</p>
          </div>
          <div className="flex justify-between text-lg mt-2">
            <p>User status</p>
            <p>Premium</p>
          </div>
          <div className="flex justify-between text-lg mt-2">
            <p>Details</p>
            <p>Referral-Kyc</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Task