import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Helmet } from 'react-helmet';
import { FaUser, FaEnvelope, FaPhone, FaCalendarAlt, FaSignOutAlt, FaEdit } from 'react-icons/fa';
import { updateProfile } from 'firebase/auth';

const UserProfile = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    displayName: '',
    phoneNumber: '',
    photoURL: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (user) {
      setFormData({
        displayName: user.displayName || '',
        phoneNumber: user.phoneNumber || '',
        photoURL: user.photoURL || ''
      });
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveProfile = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Update Firebase Auth profile
      await updateProfile(auth.currentUser, {
        displayName: formData.displayName,
        photoURL: formData.photoURL
      });

      // Update Firestore user document if you store additional data there
      const userRef = doc(db, 'users', user.uid);
      await updateDoc(userRef, {
        displayName: formData.displayName,
        phoneNumber: formData.phoneNumber,
        photoURL: formData.photoURL
      });

      setSuccess('Profile updated successfully!');
      setTimeout(() => setSuccess(''), 3000);
      setEditMode(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md p-6 bg-white rounded-xl shadow-md text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Please sign in</h2>
          <p className="text-gray-600">You need to be signed in to view your profile.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>{`${user.displayName || 'My Profile'} | Account Settings`}</title>
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-green-800 to-emerald-900  p-6 md:p-8 text-white">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="relative group">
                <img
                  src={formData.photoURL || '/default-user.jpg'}
                  alt={formData.displayName}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg object-cover"
                />
                {editMode && (
                  <div className="absolute inset-0 bg-black bg-opacity-40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <label htmlFor="photo-upload" className="cursor-pointer">
                      <FaEdit className="text-white text-2xl" />
                    </label>
                    <input
                      id="photo-upload"
                      type="file"
                      className="hidden"
                      onChange={(e) => {
                        // Handle file upload logic here
                        // You would typically upload to Firebase Storage first
                        // Then get the download URL and set it to photoURL
                      }}
                    />
                  </div>
                )}
              </div>
              <div className="flex-1">
                {editMode ? (
                  <input
                    type="text"
                    name="displayName"
                    value={formData.displayName}
                    onChange={handleInputChange}
                    className="text-2xl md:text-3xl font-bold bg-blue-700 bg-opacity-20 text-white rounded px-3 py-1 w-full mb-2"
                  />
                ) : (
                  <h1 className="text-2xl md:text-3xl font-bold mb-2">{formData.displayName || 'User'}</h1>
                )}
                <div className="flex items-center gap-2 text-blue-100">
                  <FaEnvelope className="text-sm" />
                  <span>{user.email}</span>
                </div>
                {success && (
                  <div className="mt-3 bg-green-500 text-white px-3 py-1 rounded text-sm inline-block">
                    {success}
                  </div>
                )}
              </div>
              <div className="flex gap-3">
                {editMode ? (
                  <>
                    <button
                      onClick={handleSaveProfile}
                      disabled={loading}
                      className="px-4 py-2 bg-white text-blue-700 rounded-md hover:bg-blue-50 transition-colors flex items-center gap-2"
                    >
                      {loading ? 'Saving...' : 'Save Changes'}
                    </button>
                    <button
                      onClick={() => setEditMode(false)}
                      className="px-4 py-2 bg-transparent border border-white text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => setEditMode(true)}
                    className="px-4 py-2 bg-white text-blue-700 rounded-md hover:bg-blue-50 transition-colors flex items-center gap-2"
                  >
                    <FaEdit /> Edit Profile
                  </button>
                )}
                <button
                  onClick={signOutUser}
                  className="px-4 py-2 bg-transparent border border-white text-white rounded-md hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  <FaSignOutAlt /> Sign Out
                </button>
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 md:p-8">
            {/* Main Information */}
            <div className="md:col-span-2 space-y-6">
              <div className="bg-blue-50 rounded-lg p-5">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-blue-800 mb-3">
                  <FaUser className="text-blue-600" />
                  Personal Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-500 mb-1">Full Name</label>
                    {editMode ? (
                      <input
                        type="text"
                        name="displayName"
                        value={formData.displayName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded-md "
                      />
                    ) : (
                      <p className="font-medium text-black">{formData.displayName || 'Not provided'}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm text-gray-500 mb-1">Email</label>
                    <p className="font-medium text-black">{user.email}</p>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-500 mb-1">Phone Number</label>
                    {editMode ? (
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded-md"
                      />
                    ) : (
                      <p className="font-medium text-black">{formData.phoneNumber || 'Not provided'}</p>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Account Security</h3>
                <div className="space-y-3">
                  <button className="text-blue-600 ">
                    Change Password
                  </button>
                  <button className="text-blue-600 ">
                    Two-Factor Authentication
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar Information */}
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Account Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <FaCalendarAlt className="text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-500">Member since</p>
                      <p className="font-medium text-black">
                        {user.metadata?.creationTime
                          ? new Date(user.metadata.creationTime).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })
                          : 'N/A'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaUser className="text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-500">Account ID</p>
                      <p className="font-medium text-sm text-gray-600 break-all">
                        {user.uid}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Connected Services</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Google</span>
                    <span className="text-sm px-2 py-1 bg-green-100 text-green-800 rounded">
                      Connected
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;