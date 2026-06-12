'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function PropertyDetails() {
  const params = useParams();
  const propertyId = params.id as string;
  const [activeTab, setActiveTab] = useState('overview');
  
  // Mock Data
  const property = {
    id: propertyId,
    title: 'Azure Waterfront Villa',
    price: 4500000,
    type: 'House',
    location: 'Beverly Hills, CA',
    beds: 5,
    baths: 4,
    sqft: 4500,
    description: 'This stunning modern villa offers breathtaking views, state-of-the-art smart home features, and expansive open-plan living areas. Perfect for entertaining, the property includes a fully equipped chef kitchen, a zero-edge pool, and lush landscaped gardens.',
    features: ['Smart Home System', 'Chef Kitchen', 'Zero-edge Pool', 'Home Theater', 'Wine Cellar', '3-Car Garage'],
    agent: {
      name: 'Sarah Jenkins',
      email: 'sarah.j@aquaestates.com',
      phone: '+1 (555) 123-4567'
    }
  };

  return (
    <div className="flex-1 flex flex-col p-8 bg-[#F8FDFF] gap-8">
      {/* Top Header */}
      <div className="flex justify-between items-end">
        <div>
          <span className="inline-block px-3 py-1 bg-[#E2F7FB] text-[#0097A7] rounded-lg text-xs font-bold tracking-wider uppercase mb-3">
            LUXURY {property.type}
          </span>
          <h1 className="text-4xl font-bold leading-none mb-2 text-[#1A202C]">{property.title}</h1>
          <div className="flex items-center text-slate-500 text-sm">
            <span>📍 {property.location}</span>
          </div>
        </div>
        <div className="text-right">
           <p className="text-sm font-bold text-slate-400 mb-1">Asking Price</p>
           <p className="text-3xl font-bold text-[#00B8D9]">${(property.price / 1000000).toFixed(1)}M</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="bg-white rounded-[2.5rem] p-4 border border-slate-100 shadow-lg shadow-cyan-900/5 h-[400px] relative overflow-hidden">
             <img src={`https://picsum.photos/seed/${propertyId}/1920/1080`} className="absolute inset-0 w-full h-full object-cover rounded-[2rem]" alt={property.title} />
          </div>

          <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-lg shadow-cyan-900/5 flex flex-col">
            <div className="flex gap-8 border-b border-slate-100 pb-6 mb-6">
               <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Bedrooms</p>
                  <p className="text-xl font-bold text-[#1A202C]">{property.beds}</p>
               </div>
               <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Bathrooms</p>
                  <p className="text-xl font-bold text-[#1A202C]">{property.baths}</p>
               </div>
               <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Square Feet</p>
                  <p className="text-xl font-bold text-[#1A202C]">{property.sqft}</p>
               </div>
            </div>
            
            <div className="flex gap-6 mb-6">
              {['overview', 'features', 'virtual tour'].map(tab => (
                <button 
                  key={tab} 
                  onClick={() => setActiveTab(tab)}
                  className={`text-sm font-bold capitalize transition-colors ${activeTab === tab ? 'text-[#00B8D9]' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="flex-1">
               {activeTab === 'overview' && (
                  <p className="text-sm text-slate-600 leading-relaxed">{property.description}</p>
               )}
               {activeTab === 'features' && (
                  <div className="grid sm:grid-cols-2 gap-4">
                     {property.features.map(f => (
                        <div key={f} className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                          <span className="text-[#00B8D9]">✓</span> {f}
                        </div>
                     ))}
                  </div>
               )}
               {activeTab === 'virtual tour' && (
                  <div className="flex flex-col items-center justify-center py-8 px-4 bg-[#F8FDFF] rounded-2xl border border-dashed border-[#00B8D9]/20">
                     <span className="text-2xl mb-2">🎥</span>
                     <h3 className="text-sm font-bold text-[#1A202C] mb-1">Virtual Tour Generating</h3>
                     <p className="text-xs text-slate-500">AI is processing the video tour for this property.</p>
                  </div>
               )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-[320px] flex flex-col gap-6">
          <div className="bg-[#0F172A] p-6 rounded-[2.5rem] text-white shadow-xl">
             <span className="inline-block px-2 py-1 bg-[#00E5FF] text-[#0F172A] text-[10px] font-bold rounded mb-4">AI ANALYTICS</span>
             <h3 className="font-semibold mb-2">Value Estimator</h3>
             <p className="text-[11px] text-slate-400 mb-4 leading-relaxed">Based on real-time market data in Beverly Hills, this property is priced favorably compared to similar listings.</p>
             <button className="w-full bg-white/10 hover:bg-white/20 transition-colors text-white font-bold py-3 rounded-xl border border-white/20 text-sm">
               Generate Full Report
             </button>
          </div>

          <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-lg shadow-cyan-900/5">
             <h3 className="font-bold text-[#1A202C] mb-4">Contact Agent</h3>
             <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200">
                   <img src="https://i.pravatar.cc/150?u=sarah" alt="Agent" className="w-full h-full object-cover" />
                </div>
                <div>
                   <p className="font-bold text-[#1A202C] text-sm">{property.agent.name}</p>
                   <p className="text-xs text-slate-500">Senior Real Estate Agent</p>
                </div>
             </div>
             <button className="w-full bg-[#00B8D9] hover:bg-[#0097A7] transition-colors text-white font-bold py-3 rounded-xl shadow-lg shadow-[#00B8D9]/30 text-sm mb-3">
               Schedule a Viewing
             </button>
             <button className="w-full bg-[#F8FDFF] text-[#0097A7] font-bold py-3 rounded-xl border border-[#00B8D9]/20 text-sm hover:bg-[#E2F7FB] transition-colors">
               Send a Message
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}
