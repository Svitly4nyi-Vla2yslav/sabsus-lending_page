import React, { useEffect, useState } from 'react';
import { Element, scroller } from 'react-scroll';
import {
  PoliciesContainer,
  PolicySection,
  LockIconContainer,
  LockIcon,
  PolicyTitle,
  PolicyText,
} from './Footer.styled';

import locker from '../../assets/icons/tabler_lock-filled.svg';
import { GradientBackground, GradientWrapper } from '../StarrySky/GradientBackground';

interface PoliciesContentProps {
  activePolicy: string | null;
}

export const PoliciesContent: React.FC<PoliciesContentProps> = ({
  activePolicy,
}) => {
  useEffect(() => {
    if (activePolicy) {
      scroller.scrollTo(activePolicy, {
        duration: 500,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -100, // Додатковий відступ від верху
      });
    }
  }, [activePolicy]);
  return (
    <PoliciesContainer>
        <GradientWrapper />
      <Element name="privacy">
        <PolicySection>
          {' '}
          <PolicyTitle>
            <LockIcon src={locker} alt="🔐" /> Privacy Policy
          </PolicyTitle>
          <PolicyText>
            <h3>Website Visitors</h3>
            <p>
              Website Visitors Landbook.com (“Landbook”) is a platform that
              gathers and presents website design inspirations from all around
              the web to help Creative Professionals explore the latest design
              trends, get inspired by them and create their own unique work.
              Landbook does not own copyright to any website design presented on
              Landbook.com, nor is it responsible for content that appears
              within any website posted on Landbook.com. However, Landbook
              carefully selects websites which appear on the platform, making
              sure that no obscene, offensive or objectionable content is
              promoted. Below we present you Landbook’s policy to respect your
              privacy regarding any information we may collect while operating
              our website. Privacy At Landbook we have a few fundamental
              principles regarding privacy: • We don’t ask you for personal
              information unless we truly need it. • We don’t share your
              personal information with anyone except to comply with the law,
              develop our products, or protect our rights. • We don’t store
              personal information on our servers unless required for the
              on-going operation of one of our services. Website Visitors and
              Users Like most website operators, Landbook collects
              non-personally-identifying information of the sort that web
              browsers and servers typically make available, such as the browser
              type, language preference, referring site, and the date and time
              of each visitor request. Landbook’s purpose in collecting
              non-personally identifying information is to better understand how
              Landbook’s visitors use its website. From time to time, Landbook
              may release non-personally-identifying information in the
              aggregate, e.g., by publishing a report on trends in the usage of
              its website. Landbook also collects potentially
              personally-identifying information like Internet Protocol (IP)
              addresses. Landbook does not use such information to identify its
              visitors, however, and does not disclose such information, other
              than under the same circumstances that it uses and discloses
              personally-identifying information, as described below. Gathering
              of Personally-Identifying Information Certain visitors to Landbook
              websites choose to interact with Landbook in ways that require
              Landbook to gather personally-identifying information. The amount
              and type of information that Landbook gathers depends on the
              nature of the interaction. For example, we ask visitors who sign
              up account at Landbook.com to provide a username and email
              address. Landbook collects such information only insofar as is
              necessary or appropriate to fulfill the purpose of the visitors
              interaction with Landbook. Landbook does not disclose
              personally-identifying information other than as described below.
              And visitors can always refuse to supply personally-identifying
              information, with the caveat that it may prevent them from
              engaging in certain website-related activities. Aggregated
              Statistics Landbook may collect statistics about the behavior of
              visitors to its websites. Landbook may display this information
              publicly or provide it to others. However, Landbook does not
              disclose personally-identifying information other than as
              described below. Protection of Certain Personally-Identifying
              Information Landbook discloses potentially personally-identifying
              and personally-identifying information only to those of its
              employees, contractors and affiliated organizations that (i) need
              to know that information in order to process it on Landbook’s
              behalf or to provide services available at Landbook websites, and
              (ii) that have agreed not to disclose it to others. Some of those
              employees, contractors and affiliated organizations may be located
              outside of your home country; by using Landbook’s websites, you
              consent to the transfer of such information to them.
            </p>

            {/* Додайте решту тексту Privacy Policy */}
          </PolicyText>
        </PolicySection>
      </Element>

      <Element name="terms">
        <PolicySection>
          <LockIconContainer></LockIconContainer>
          <PolicyTitle>Terms of Service</PolicyTitle>
          <PolicyText>
            <h3>Terms of Service</h3>
            <p>
              The following terms and conditions govern all use of the
              Landbook.com website and all content, services and products
              available at or through the website.
            </p>

            {/* Додайте решту тексту Terms of Service */}
          </PolicyText>
        </PolicySection>
      </Element>

      <Element name="cookie">
        <PolicySection>
          <LockIconContainer></LockIconContainer>
          <PolicyTitle>Cookie Policy</PolicyTitle>
          <PolicyText>
            <h3>Cookies</h3>
            <p>
              A cookie is a string of information that a website stores on a
              visitors computer, and that the visitors browser provides to the
              website each time the visitor returns. Landbook uses cookies to
              help Landbook identify and track visitors, their usage of Landbook
              website, and their website access preferences. Landbook visitors
              who do not wish to have cookies placed on their computers should
              set their browsers to refuse cookies before using Landbook
              websites, with the drawback that certain features of Landbook
              websites may not function properly without the aid of cookies.
              Privacy Policy Changes Although most changes are likely to be
              minor, Landbook may change its Privacy Policy from time to time,
              and in Landbook sole discretion. Landbook encourages visitors to
              frequently check this page for any changes to its Privacy Policy.
              Your continued use of this site after any change in this Privacy
              Policy will constitute your acceptance of such change. This
              Privacy Policy is a derivative of Wordpress.com's Privacy Policy
              by Automattic, available under a Creative Commons Sharealike
              license. Terms of Service The following terms and conditions
              govern all use of the Landbook.com website and all content,
              services and products available at or through the website. The
              Website is owned and operated by Dawid Liberadzki Studio. The
              Website is offered subject to your acceptance without modification
              of all of the terms and conditions contained herein and all other
              operating rules, policies (including, without limitation,
              Landbook’s Privacy Policy) and procedures that may be published
              from time to time on this Website by Dawid Liberadzki Studio
              (collectively, the Agreement). Please read this Agreement
              carefully before accessing or using Landbook.com. By accessing or
              using any part of the website, you agree to become bound by the
              terms and conditions of this agreement. If you do not agree to all
              the terms and conditions of this agreement, then you may not
              access the website or use any services. If these terms and
              conditions are considered an offer by Dawid Liberadzki Studio,
              acceptance is expressly limited to these terms. The Website is
              available only to individuals who are at least 13 years old. Your
              Landbook Account If you create an account on the Website, you are
              responsible for maintaining the security of your account and its
              content, and you are fully responsible for all activities that
              occur under the account and any other actions taken in connection
              with the Website. You must not describe or assign content to your
              account in a misleading or unlawful manner, including in a manner
              intended to trade on the name or reputation of others, and
              Landbook may change or remove any description or keyword that it
              considers inappropriate or unlawful, or otherwise likely to cause
              Landbook liability. You must immediately notify Landbook of any
              unauthorized uses of your account or any other breaches of
              security. Landbook will not be liable for any acts or omissions by
              You, including any damages of any kind incurred as a result of
              such acts or omissions. Responsibility of Contributors If you
              operate an account, submit a website, post material or links to
              Landbook.com, or otherwise make (or allow any third party to make)
              material available (any such material, “Content”), you are
              entirely responsible for the content of, and any harm resulting
              from, that Content. That is the case regardless of whether the
              Content in question constitutes text or graphics. By making
              Content available, you represent and warrant that: • the
              downloading, copying and use of the Content will not infringe the
              proprietary rights, including but not limited to the copyright,
              patent, trademark or trade secret rights, of any third party; •
              the Content does not contain or install any viruses, worms,
              malware, Trojan horses or other harmful or destructive content; •
              the Content is not spam, is not machine- or randomly-generated,
              and does not contain unethical or unwanted commercial content
              designed to drive traffic to third party sites or boost the search
              engine rankings of third party sites, or to further unlawful acts
              (such as phishing) or mislead recipients as to the source of the
              material (such as spoofing); • the Content is not obscene,
              libelous or defamatory, hateful or racially or ethnically
              objectionable, and does not violate the privacy or publicity
              rights of any third party; • your account is not getting
              advertised via unwanted electronic messages such as spam links on
              newsgroups, email lists, other blogs and web sites, and similar
              unsolicited promotional methods; • your account is not named in a
              manner that misleads your readers into thinking that you are
              another person or company. For example, your account’s URL or name
              is not the name of a person other than yourself or company other
              than your own; Please read our Guidelines to learn about the rules
              and good practices that we follow at Landbook.com. Landbook
              reserves the right to remove any kind of Content for any reason
              whatsoever. Also, Landbook reserves the right to ban any member or
              website from using the service for any reason. Landbook reserves
              the right not to approve any website submission. If it happens a
              website will be visible in the “Waiting Room” for a particular
              period of time, and won’t appear neither in the “Fresh” nor “Hot”
              section. If you delete Content, Landbook will use reasonable
              efforts to remove it from the Website, but you acknowledge that
              caching or references to the Content may not be made immediately
              unavailable. Without limiting any of those representations or
              warranties, Landbook has the right (though not the obligation) to,
              in Landbook’s sole discretion (i) refuse or remove any content
              that, in Landbook’s reasonable opinion, violates any Landbook
              policy or is in any way harmful or objectionable, or (ii)
              terminate or deny access to and use of the Website to any
              individual or entity for any reason, in Landbook’s sole
              discretion. Landbook will have no obligation to provide a refund
              of any amounts previously paid. Author Rights and Responsibilities
              By submitting content to Landbook as an author, you affirm that
              you have the legal rights and/or necessary permissions for the
              content you provide. You are responsible for ensuring that your
              submissions do not infringe on any third-party intellectual
              property rights, including but not limited to copyright, patent,
              trademark, or trade secret rights. You agree to indemnify and hold
              harmless Landbook against all claims, liabilities, and expenses
              arising from any infringement of third-party rights through the
              content you submit. This responsibility includes ensuring the
              legality and propriety of the submitted content under applicable
              laws. Responsibility of Website Visitors Landbook has not
              reviewed, and cannot review, all of the material posted to the
              Website, and cannot therefore be responsible for that material’s
              content, use or effects. By operating the Website, Landbook does
              not represent or imply that it endorses the material there posted,
              or that it believes such material to be accurate, useful or
              non-harmful. You are responsible for taking precautions as
              necessary to protect yourself and your computer systems from
              viruses, worms, Trojan horses, and other harmful or destructive
              content. The Website may contain content that is offensive,
              indecent, or otherwise objectionable, as well as content
              containing technical inaccuracies, typographical mistakes, and
              other errors. The Website may also contain material that violates
              the privacy or publicity rights, or infringes the intellectual
              property and other proprietary rights, of third parties, or the
              downloading, copying or use of which is subject to additional
              terms and conditions, stated or unstated. Landbook disclaims any
              responsibility for any harm resulting from the use by visitors of
              the Website, or from any downloading by those visitors of content
              there posted. Intellectual Property This Agreement does not
              transfer from Landbook to you any Landbook or third party
              intellectual property, and all right, title and interest in and to
              such property will remain (as between the parties) solely with
              Landbook. Landbook, the Landbook logo, and all other trademarks,
              service marks, graphics and logos used in connection with
              Landbook, or the Website are trademarks or registered trademarks
              of Landbook or Landbook licensors. Other trademarks, service
              marks, graphics and logos used in connection with the Website may
              be the trademarks of other third parties. Your use of the Website
              grants you no right or license to reproduce or otherwise use any
              Landbook or third-party trademarks. Changes We are constantly
              updating our Services, and that means sometimes we have to change
              the legal terms under which our Services are offered. Landbook
              reserves the right, at its sole discretion, to modify or replace
              any part of this Agreement. It is your responsibility to check
              this Agreement periodically for changes. Your continued use of or
              access to the Website following the posting of any changes to this
              Agreement constitutes acceptance of those changes. Landbook may
              also, in the future, offer new services and/or features through
              the Website (including, the release of new tools and resources).
              Such new features and/or services shall be subject to the terms
              and conditions of this Agreement. Termination Landbook may
              terminate your access to all or any part of the Website at any
              time, with or without cause, with or without notice, effective
              immediately. If you wish to terminate this Agreement or your
              Landbook.com account (if you have one), you may simply discontinue
              using the Website. All provisions of this Agreement which by their
              nature should survive termination shall survive termination,
              including, without limitation, ownership provisions, warranty
              disclaimers, indemnity and limitations of liability. Disclaimer of
              Warranties The Website is provided “as is”. Landbook and its
              suppliers and licensors hereby disclaim all warranties of any
              kind, express or implied, including, without limitation, the
              warranties of merchantability, fitness for a particular purpose
              and non-infringement. Neither Landbook nor its suppliers and
              licensors, makes any warranty that the Website will be error free
              or that access thereto will be continuous or uninterrupted. You
              understand that you download from, or otherwise obtain content or
              services through, the Website at your own discretion and risk.
              Limitation of Liability In no event will Landbook, or its
              suppliers or licensors, be liable with respect to any subject
              matter of this agreement under any contract, negligence, strict
              liability or other legal or equitable theory for: (i) any special,
              incidental or consequential damages; (ii) the cost of procurement
              or substitute products or services; (iii) for interruption of use
              or loss or corruption of data; or (iv) for any amounts that exceed
              the fees paid by you to Landbook under this agreement during the
              twelve (12) month period prior to the cause of action. Landbook
              shall have no liability for any failure or delay due to matters
              beyond their reasonable control. The foregoing shall not apply to
              the extent prohibited by applicable law. General Representation
              and Warranty You represent and warrant that (i) your use of the
              Website will be in strict accordance with the Landbook Privacy
              Policy, with this Agreement and with all applicable laws and
              regulations (including without limitation any local laws or
              regulations in your country, state, city, or other governmental
              area, regarding online conduct and acceptable content, and
              including all applicable laws regarding the transmission of
              technical data exported from Poland or the country in which you
              reside) and (ii) your use of the Website will not infringe or
              misappropriate the intellectual property rights of any third
              party. Indemnification You agree to indemnify and hold harmless
              Landbook, its contractors, and its licensors, and their respective
              directors, officers, employees and agents from and against any and
              all claims and expenses, including attorneys fees, arising out of
              your use of the Website, including but not limited to out of your
              violation this Agreement. Miscellaneous This Agreement constitutes
              the entire agreement between Landbook and you concerning the
              subject matter hereof, and they may only be modified by a written
              amendment signed by an authorized executive of Landbook, or by the
              posting by Landbook of a revised version. Except to the extent
              applicable law, if any, provides otherwise, this Agreement, any
              access to or use of the Website will be governed by the laws of
              Poland. This Terms of Service is a derivative of Wordpress.com's
              Terms of Service by Automattic, available under a Creative Commons
              Sharealike license.
            </p>

            {/* Додайте решту тексту Cookie Policy */}
          </PolicyText>
        </PolicySection>
      </Element>
    </PoliciesContainer>
  );
};
