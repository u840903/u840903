import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <>
      <h1 className={"font-bold text-2xl mb-4"}>Privacy Policy</h1>
      <p>Effective Date: 2024-08-27</p>
      <p>Podworks ("we," "our," or "us") values your privacy. This Privacy Policy outlines the types of information we
        collect, use, store, and share when you use our mobile application ("App").</p>
      <h2>1. Information We Collect</h2>
      <p>We are committed to protecting your privacy and only collect minimal information necessary to improve our App's
        performance and stability. Specifically, we collect anonymous diagnostic data through Sentry, a third-party
        service. The types of information we collect include:</p>
      <ul>
        <li>Crash reports and error logs</li>
        <li>App performance data</li>
        <li>Device information (such as device type, operating system, and version)</li>
        <li>This information is collected in a way that does not personally identify you.</li>
      </ul>
      <h2>2. Use of Collected Information</h2>
      <p>The anonymous diagnostic data we collect is used solely for the purpose of:</p>
      <ul>
        <li>Identifying and fixing bugs and crashes</li>
        <li>Improving the performance and stability of our App</li>
        <li> Enhancing user experience</li>
      </ul>
      <h2>3. Sharing of Information</h2>
      <p>We do not share your personal data with third parties. However, the anonymous diagnostic data collected by
        Sentry
        may be shared with Sentry for the purpose of providing their diagnostic services. Sentry’s privacy policy can be
        found here.</p>
      <h2>4. Data Security</h2>
      <p>We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or
        destruction of the anonymous diagnostic data collected by Sentry. We are committed to maintaining the security
        and
        integrity of your data.</p>
      <h2>5. Children's Privacy</h2>
      <p>Our App does not collect any personal data from users of any age, including children under the age of 13. The
        anonymous diagnostic data collected does not personally identify any users.</p>
      <h2>6. Changes to This Privacy Policy</h2>
      <p>We may update our Privacy Policy from time to time. If we make any changes, we will notify you by updating the
        effective date at the top of this policy. We encourage you to review this Privacy Policy periodically for any
        updates.</p>
      <p>By using our App, you agree to the terms and conditions of this Privacy Policy. If you do not agree with any
        part
        of this Privacy Policy, please do not use our App.</p>
    </>
  );
}
