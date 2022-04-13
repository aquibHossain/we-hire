import {Typography } from '@mui/material';
import React from 'react';
import Footer from '../../../Footer/Footer';
import About from '../../About/About';
import HeaderPart from '../../Header/HeaderPart/HeaderPart';
import TopPost from '../../TopPost/TopPost';
import Categories from '../Categories/Categories';
import CustomerDetails from '../CustomerDetails/CustomerDetails';

const Home = () => {
    return (
        <div>

            <HeaderPart></HeaderPart>
           <Categories></Categories>
           <Typography sx={{p:10,backgroundColor:'#DFF6FF',my:15}}>
           Vara Koto ডিজিটাল প্লাটফর্ম সম্পর্কে
Vara Koto বাসা ভাড়া দেওয়া এবং বাসা ভাড়া খোঁজার একটি ডিজিটাল প্লাটফর্ম। Vara Koto ওয়েবসাইট এবং অ্যাপ এর মাধ্যমে আপনি কয়েক মিনিটেই দিয়ে দিতে পারেন আপনার বাসা ভাড়ার বিজ্ঞাপন অথবা আপনি যদি ভাড়াটিয়া হয়ে থাকেন তাহলে খুঁজে পেতে পারেন আপনার পছন্দের বাসা।
<br />
<br />
প্রতিদিনই নতুন নতুন বাসা ভাড়ার বিজ্ঞাপন প্রকাশ করছেন আমাদের সন্মানিত ব্যাবহারকারিগন। Vara Koto ওয়েবসাইট এবং অ্যাপ এর মাধ্যমে বাসা ভাড়ার বিজ্ঞাপন প্রকাশ করা একদমই সোজা। মাত্র কয়েক ক্লিকেই প্রকাশ করতে পারেন আপনার বাসা ভাড়ার বিজ্ঞাপনটি। Vara Koto ডিজিটাল প্লাটফর্ম এর মাধ্যমে আপনি পছন্দের বাসা খোঁজা, বুকমার্ক করা, বন্ধুদের সাথে শেয়ার করা, বিজ্ঞাপন দাতাদের সাথে সরাসরি যোগাযোগ করা সহ বাসা ভাড়া সংক্রান্ত আরও অনেক ডিজিটাল সেবা পেয়ে যাবেন।
<br />
Vara Koto ডিজিটাল প্লাটফর্ম সারা বাংলাদেশের যেকোনো প্রান্ত থেকে আপনি ব্যাবহার করতে পারবেন, অর্থাৎ বাংলাদেশ এর যেকোনো এলাকা বা অঞ্চলের বাসা ভাড়ার বিজ্ঞাপন ফ্রিতে প্রকাশ করতে পারবেন।
<br />
<br />
ফ্ল্যাট বাসা ভাড়া, সিট বাসা ভাড়া, সাবলেট বাসা ভাড়া, ব্যাচেলর বাসা ভাড়া, ফ্যামিলি বাসা ভাড়া, ছাত্রদের জন্য বাসা ভাড়া, ছাত্রীদের জন্য বাসা ভাড়া, চাকুরীজীবীদের জন্য বাসা ভাড়া সহ সকল প্রকার বাসা ভাড়ার ডিজিটাল প্লাটফর্ম হচ্ছে Vara Koto।
<br />
Vara Koto ডিজিটাল বাসা ভাড়ার প্লাটফর্ম, ডিজিটাল বাংলাদেশ গড়ার ক্ষেত্রে একটি অংশ হিসেবে কাজ করে যাচ্ছে। Vara Koto ডিজিটাল প্লাটফর্ম সেবার মান উন্নত থেকে উন্নত করার জন্য অঙ্গীকার বদ্ধ।
           </Typography>
           <TopPost></TopPost>
           <About></About>
           <CustomerDetails></CustomerDetails>
           <Footer></Footer>
        </div>
    );
};

export default Home;