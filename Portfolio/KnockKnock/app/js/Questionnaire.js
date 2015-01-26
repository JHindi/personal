var Questionnaire = {
  "Version": null,
  "Categories": [
    {
      "Id": "catETL_Assessment",
      "Title": "ETL Assessment",
      "Description": "ETL Assessment",
      "SubCategories": [
        {
          "Id": "subIndustry_Assessment",
          "Title": "Industry Assessment",
          "Description": "Environmental Turbulence Level Assessment (1-5)",
          "Questions": [
            {
              "Id": "qs_Frequency_of_New_Products_In_Industry",
              "Text": "1. Frequency of New Products In Industry",
              "Choices": [
                {
                  "Text": "Infrequent 5 or more yrs"
                },
                {
                  "Text": "Low"
                },
                {
                  "Text": "Moderate"
                },
                {
                  "Text": "High"
                },
                {
                  "Text": "Very High -Several per yr"
                }
              ]
            },
            {
              "Id": "qs_Rapidity_of_Industry_Change",
              "Text": "2. Rapidity of Industry Change",
              "Choices": [
                {
                  "Text": "None"
                },
                {
                  "Text": "Change occurs incrementally slow"
                },
                {
                  "Text": "Change occurs incrementally fast"
                },
                {
                  "Text": "Change is discontinuous but familiar"
                },
                {
                  "Text": "Change is discontinuous and novel"
                }
              ]
            },
            {
              "Id": "qs_Length_of_Product_life_Cycle_in_industry",
              "Text": "3. Length of Product life Cycle in industry",
              "Choices": [
                {
                  "Text": "Very long 10 or more yrs"
                },
                {
                  "Text": "Long (7-10)"
                },
                {
                  "Text": "Moderate (3-7)"
                },
                {
                  "Text": "Short (1-3)"
                },
                {
                  "Text": "Short - less than 1yr"
                }
              ]
            },
            {
              "Id": "qs_Number_of_Competing_Technologies_in_industry",
              "Text": "4. Number of Competing Technologies in industry",
              "Choices": [
                {
                  "Text": "None"
                },
                {
                  "Text": "1"
                },
                {
                  "Text": "2 >3"
                },
                {
                  "Text": "4>5"
                },
                {
                  "Text": "5+"
                }
              ]
            },
            {
              "Id": "qs_Industry_Technological_Intensity",
              "Text": "5. Industry Technological Intensity",
              "Choices": [
                {
                  "Text": "Low"
                },
                {
                  "Text": "Low increasing"
                },
                {
                  "Text": "Moderate"
                },
                {
                  "Text": "High"
                },
                {
                  "Text": "Very High"
                }
              ]
            },
            {
              "Id": "qs_Rate_of_Technological_Obsolescence",
              "Text": "6. Rate of Technological Obsolescence",
              "Choices": [
                {
                  "Text": "Low"
                },
                {
                  "Text": "Low"
                },
                {
                  "Text": "High"
                },
                {
                  "Text": "High"
                },
                {
                  "Text": "Very High"
                }
              ]
            },
            {
              "Id": "qs_Level_of_Product_Performance_Differentiation_in_industry",
              "Text": "7. Level of Product Performance Differentiation in industry",
              "Choices": [
                {
                  "Text": "None"
                },
                {
                  "Text": "Low"
                },
                {
                  "Text": "Moderate"
                },
                {
                  "Text": "High"
                },
                {
                  "Text": "Drastic (based on Discontinuous Technology)"
                }
              ]
            },
            {
              "Id": "qs_Societal_Pressures_on_Industry",
              "Text": "8. Societal Pressures on Industry",
              "Choices": [
                {
                  "Text": "None"
                },
                {
                  "Text": "Moderate"
                },
                {
                  "Text": "Strong"
                },
                {
                  "Text": "Very Strong"
                },
                {
                  "Text": "Strong and Novel"
                }
              ]
            },
            {
              "Id": "qs_Visibility_of_future_change_events_in_industry",
              "Text": "9. Visibility of future change events in industry",
              "Choices": [
                {
                  "Text": "Complete visibility"
                },
                {
                  "Text": "Future visibility is extrapolative"
                },
                {
                  "Text": "Future visibility is predictable"
                },
                {
                  "Text": "Future visibility is partially predictable"
                },
                {
                  "Text": "Future visibility is completely unpredictable"
                }
              ]
            },
            {
              "Id": "qs_Industry_s_Demand_for_Growth_Capital",
              "Text": "10. Industry's Demand for Growth Capital",
              "Choices": [
                {
                  "Text": "Low"
                },
                {
                  "Text": "Moderate"
                },
                {
                  "Text": "High"
                },
                {
                  "Text": "Very High"
                },
                {
                  "Text": "Very High"
                }
              ]
            },
            {
              "Id": "qs_Rate_of_Change_in_the_industry",
              "Text": "11. Rate of Change in the industry",
              "Choices": [
                {
                  "Text": "No Change"
                },
                {
                  "Text": "Change is slower than firm response time"
                },
                {
                  "Text": "Firm response time is equal to change"
                },
                {
                  "Text": "Change occurs faster than firm response time"
                },
                {
                  "Text": "Change is completely surpriseful"
                }
              ]
            },
            {
              "Id": "qs_Barriers_to_Entry_of_New_Competitors_in_industry",
              "Text": "12. Barriers to Entry of New Competitors in industry",
              "Choices": [
                {
                  "Text": "None"
                },
                {
                  "Text": "Low"
                },
                {
                  "Text": "Moderate"
                },
                {
                  "Text": "High"
                },
                {
                  "Text": "Very High"
                }
              ]
            },
            {
              "Id": "qs_Frequency_of_Turbulence_level_shifts_in_industry",
              "Text": "13. Frequency of Turbulence level shifts in industry",
              "Choices": [
                {
                  "Text": "Rare"
                },
                {
                  "Text": "Low"
                },
                {
                  "Text": "Occasional"
                },
                {
                  "Text": "Often"
                },
                {
                  "Text": "Regularly"
                }
              ]
            },
            {
              "Id": "qs_Competitive_Scope",
              "Text": "14. Competitive Scope",
              "Choices": [
                {
                  "Text": "Regional"
                },
                {
                  "Text": "Multi-Regional"
                },
                {
                  "Text": "Domestic"
                },
                {
                  "Text": "Multi-National"
                },
                {
                  "Text": "International"
                }
              ]
            }
          ]
        },
        {
          "Id": "subMacro_Environmental_Assessment",
          "Title": "Macro Environmental Assessment",
          "Description": "Environmental Turbulence Level Assessment (1-5)",
          "Questions": [
            {
              "Id": "qs_Industry_Market_Structure",
              "Text": "1. Industry Market Structure",
              "Choices": [
                {
                  "Text": "Monopoly"
                },
                {
                  "Text": "Duopoly"
                },
                {
                  "Text": "Oligopoly"
                },
                {
                  "Text": "Multi-Competitor"
                },
                {
                  "Text": "Many with Major new entrant"
                }
              ]
            },
            {
              "Id": "qs_Consumer_Pressure_in_industry",
              "Text": "2. Consumer Pressure in industry",
              "Choices": [
                {
                  "Text": "None"
                },
                {
                  "Text": "Weak"
                },
                {
                  "Text": "Strong"
                },
                {
                  "Text": "Demanding"
                },
                {
                  "Text": "Threatening"
                }
              ]
            },
            {
              "Id": "qs_Pressure_by_Unions_on_Industry",
              "Text": "3. Pressure by Unions on Industry",
              "Choices": [
                {
                  "Text": "None"
                },
                {
                  "Text": "Weak"
                },
                {
                  "Text": "Strong"
                },
                {
                  "Text": "Demanding"
                },
                {
                  "Text": "Threatening"
                }
              ]
            },
            {
              "Id": "qs_Pressure_by_Government_on_Industry",
              "Text": "4. Pressure by Government on Industry",
              "Choices": [
                {
                  "Text": "None"
                },
                {
                  "Text": "Weak"
                },
                {
                  "Text": "Strong"
                },
                {
                  "Text": "Demanding"
                },
                {
                  "Text": "Threatening"
                }
              ]
            },
            {
              "Id": "qs_GDP_Trend",
              "Text": "5. GDP Trend",
              "Choices": [
                {
                  "Text": "<-1.0-2.0"
                },
                {
                  "Text": ".0--.09"
                },
                {
                  "Text": "0.0-.09"
                },
                {
                  "Text": "1.0-2.9"
                },
                {
                  "Text": "3>"
                }
              ]
            },
            {
              "Id": "qs_Federal_Government_Budget_Deficit",
              "Text": "6. Federal Government Budget Deficit",
              "Choices": [
                {
                  "Text": "Declining"
                },
                {
                  "Text": "Stable"
                },
                {
                  "Text": "Predictable increase"
                },
                {
                  "Text": "Predictable modest increase"
                },
                {
                  "Text": "Unpredictable, rapid, high increase"
                }
              ]
            },
            {
              "Id": "qs_Interest_Rates",
              "Text": "7. Interest Rates",
              "Choices": [
                {
                  "Text": "Stable"
                },
                {
                  "Text": "Extrapolable change"
                },
                {
                  "Text": "Predictable change occurs equal to firm response"
                },
                {
                  "Text": "Predictable change occurs faster than firm can respond"
                },
                {
                  "Text": "Unpredictable, rapid, instability - firm completely surprised"
                }
              ]
            },
            {
              "Id": "qs_Inflation_Rates",
              "Text": "8. Inflation Rates",
              "Choices": [
                {
                  "Text": "Stable"
                },
                {
                  "Text": "Extrapolable change"
                },
                {
                  "Text": "Predictable change occurs equal to firm response"
                },
                {
                  "Text": "Predictable change occurs faster than firm can respond"
                },
                {
                  "Text": "Unpredictable, rapid, instability - firm completely surprised"
                }
              ]
            },
            {
              "Id": "qs_Worker_Productivity",
              "Text": "9. Worker Productivity",
              "Choices": [
                {
                  "Text": "Decreasing"
                },
                {
                  "Text": "Stable"
                },
                {
                  "Text": "No Change"
                },
                {
                  "Text": "Increase"
                },
                {
                  "Text": "Rapid Increase"
                }
              ]
            },
            {
              "Id": "qs_Value_of_dollar_on_world_market",
              "Text": "10. Value of dollar on world market",
              "Choices": [
                {
                  "Text": "Declining"
                },
                {
                  "Text": "Stable"
                },
                {
                  "Text": "Predictable increase"
                },
                {
                  "Text": "Predictable increase"
                },
                {
                  "Text": "Unpredictable, rapid, increase"
                }
              ]
            },
            {
              "Id": "qs_Tax_Rates",
              "Text": "11. Tax Rates",
              "Choices": [
                {
                  "Text": "Decreasing"
                },
                {
                  "Text": "Stable"
                },
                {
                  "Text": "No Change"
                },
                {
                  "Text": "Increase"
                },
                {
                  "Text": "Unpredictable, rapid, increase"
                }
              ]
            },
            {
              "Id": "qs_Economic_condition_of_ASEAN",
              "Text": "12. Economic condition of ASEAN",
              "Choices": [
                {
                  "Text": "Stable"
                },
                {
                  "Text": "Extrapolable change"
                },
                {
                  "Text": "Predictable change occurs equal to firm response"
                },
                {
                  "Text": "Predictable instability change occurs faster than firm can respond"
                },
                {
                  "Text": "Unpredictable, rapid, instability - firm completely surprised"
                }
              ]
            },
            {
              "Id": "qs_Economic_condition_of_EU",
              "Text": "13. Economic condition of EU",
              "Choices": [
                {
                  "Text": "Stable"
                },
                {
                  "Text": "Extrapolable change"
                },
                {
                  "Text": "Predictable change occurs equal to firm response"
                },
                {
                  "Text": "Predictable instability change occurs faster than firm can respond"
                },
                {
                  "Text": "Unpredictable, rapid, instability - firm completely surprised"
                }
              ]
            },
            {
              "Id": "qs_Unemployment_Rate",
              "Text": "14. Unemployment Rate",
              "Choices": [
                {
                  "Text": "Low/Stable"
                },
                {
                  "Text": "Moderately Low"
                },
                {
                  "Text": "Moderate"
                },
                {
                  "Text": "Moderately High"
                },
                {
                  "Text": "High/Rapid increases"
                }
              ]
            },
            {
              "Id": "qs_Industry_Growth_Rate",
              "Text": "15. Industry Growth Rate",
              "Choices": [
                {
                  "Text": "Declining"
                },
                {
                  "Text": "Stagnant"
                },
                {
                  "Text": "Very Fast (G1)"
                },
                {
                  "Text": "4"
                },
                {
                  "Text": "Mature (M)"
                }
              ]
            },
            {
              "Id": "qs_Level_of_Capital_Intensity_Required",
              "Text": "16. Level of Capital Intensity Required",
              "Choices": [
                {
                  "Text": "None"
                },
                {
                  "Text": "Low"
                },
                {
                  "Text": "Moderate"
                },
                {
                  "Text": "High"
                },
                {
                  "Text": "Very High"
                }
              ]
            },
            {
              "Id": "qs_Pressure_by_Environmental_Groups_on_Industry",
              "Text": "17. Pressure by Environmental Groups on Industry",
              "Choices": [
                {
                  "Text": "None"
                },
                {
                  "Text": "Weak"
                },
                {
                  "Text": "Strong"
                },
                {
                  "Text": "Demanding"
                },
                {
                  "Text": "Threatening"
                }
              ]
            },
            {
              "Id": "qs_Frequency_of_New_Marketing_Strategies_in_Industry",
              "Text": "18. Frequency of New Marketing Strategies in Industry",
              "Choices": [
                {
                  "Text": "None"
                },
                {
                  "Text": "Low"
                },
                {
                  "Text": "Moderate"
                },
                {
                  "Text": "High"
                },
                {
                  "Text": "Revolutionary"
                }
              ]
            },
            {
              "Id": "qs_Level_of_Product_Image_Differentiation_found_in_industry",
              "Text": "19. Level of Product Image Differentiation found in industry",
              "Choices": [
                {
                  "Text": "None"
                },
                {
                  "Text": "Low"
                },
                {
                  "Text": "Moderate"
                },
                {
                  "Text": "High"
                },
                {
                  "Text": "Drastic"
                }
              ]
            },
            {
              "Id": "qs_Critical_industry_Marketing_Success_Factors",
              "Text": "20. Critical industry Marketing Success Factors",
              "Choices": [
                {
                  "Text": "Control of the market"
                },
                {
                  "Text": "Dominate Market Share/Low production costs"
                },
                {
                  "Text": "Product Appeal/Rapid Response to customer needs / Customer Satisfaction"
                },
                {
                  "Text": "Anticipation of change in needs / responsiveness to changing customer values"
                },
                {
                  "Text": "Identification of Latent/Underdeveloped customer needs"
                }
              ]
            },
            {
              "Id": "qs_Demand_to_Industry_Capacity",
              "Text": "21. Demand-to-Industry Capacity",
              "Choices": [
                {
                  "Text": "D>>Ic"
                },
                {
                  "Text": "D>Ic"
                },
                {
                  "Text": "D=Ic"
                },
                {
                  "Text": "Ic>D"
                },
                {
                  "Text": "Ic>>D"
                }
              ]
            },
            {
              "Id": "qs_Diversity_of_Competing_Marketing_Techniques",
              "Text": "22. Diversity of Competing Marketing Techniques",
              "Choices": [
                {
                  "Text": "None"
                },
                {
                  "Text": "Few"
                },
                {
                  "Text": "Moderate"
                },
                {
                  "Text": "Several"
                },
                {
                  "Text": "Multiple"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "Id": "catPresent_SA_Innovation",
      "Title": "Present SA - Innovation",
      "Description": "Present SA - Innovation",
      "SubCategories": [
        {
          "Id": "subINNOVATION_AGGRESSIVENESS",
          "Title": "INNOVATION AGGRESSIVENESS",
          "Description": "Strategic Aggressiveness Assessment (1-5)",
          "Questions": [
            {
              "Id": "qs_Firm_responsiveness_to_Customers",
              "Text": "1. Firm responsiveness to Customers",
              "Choices": [
                {
                  "Text": "Neglect"
                },
                {
                  "Text": "Our product is what the customer wants'"
                },
                {
                  "Text": "Anticipation of customer needs"
                },
                {
                  "Text": "Identification of unfilled needs"
                },
                {
                  "Text": "Identification of latent needs"
                }
              ]
            },
            {
              "Id": "qs_Firm_strategic_focus_of_new_product_Development",
              "Text": "2. Firm strategic focus of new product Development",
              "Choices": [
                {
                  "Text": "Process efficiency"
                },
                {
                  "Text": "Product imitation"
                },
                {
                  "Text": "Incremental product improvement"
                },
                {
                  "Text": "Product innovation"
                },
                {
                  "Text": "Product pioneering"
                }
              ]
            },
            {
              "Id": "qs_Firm_s_Product_Life_Cycles",
              "Text": "3. Firm's Product Life Cycles",
              "Choices": [
                {
                  "Text": "Very Long (5 or more yrs)"
                },
                {
                  "Text": "Long (3-5 yrs)"
                },
                {
                  "Text": "Moderate (2-3yrs)"
                },
                {
                  "Text": "Short (1yr)"
                },
                {
                  "Text": "Very Short (several per yr)"
                }
              ]
            },
            {
              "Id": "qs_Market_Development_focus",
              "Text": "4. Market Development focus",
              "Choices": [
                {
                  "Text": "Stay with current customers"
                },
                {
                  "Text": "Follow Competition"
                },
                {
                  "Text": "Expand to familiar markets"
                },
                {
                  "Text": "Expand to Foreign markets"
                },
                {
                  "Text": "Create new markets"
                }
              ]
            },
            {
              "Id": "qs_Focus_of_Research_Development",
              "Text": "5. Focus of Research & Development",
              "Choices": [
                {
                  "Text": "None"
                },
                {
                  "Text": "Technology imitation"
                },
                {
                  "Text": "Technology improvement"
                },
                {
                  "Text": "Adaptation of new technology"
                },
                {
                  "Text": "Pioneering novel technology"
                }
              ]
            },
            {
              "Id": "qs_Strategic_Time_Perspective",
              "Text": "6. Strategic Time Perspective",
              "Choices": [
                {
                  "Text": "Past"
                },
                {
                  "Text": "Present"
                },
                {
                  "Text": "Familiar Future"
                },
                {
                  "Text": "Perceivable Future"
                },
                {
                  "Text": "New Futures"
                }
              ]
            },
            {
              "Id": "qs_Change_Trigger",
              "Text": "7. Change Trigger",
              "Choices": [
                {
                  "Text": "Crisis"
                },
                {
                  "Text": "Accept familiar risks"
                },
                {
                  "Text": "Seek familiar risks"
                },
                {
                  "Text": "Seek Unfamiliar risks"
                },
                {
                  "Text": "Seeks novel risks"
                }
              ]
            },
            {
              "Id": "qs_Firm_s_Success_Model",
              "Text": "8. Firm's Success Model",
              "Choices": [
                {
                  "Text": "Stability"
                },
                {
                  "Text": "Efficiency/ Performance"
                },
                {
                  "Text": "Effective Growth"
                },
                {
                  "Text": "Effective Diversification"
                },
                {
                  "Text": "Innovation"
                }
              ]
            },
            {
              "Id": "qs_Firm_position_on_Research_Leadership",
              "Text": "9. Firm position on Research Leadership",
              "Choices": [
                {
                  "Text": "Imitator"
                },
                {
                  "Text": ">"
                },
                {
                  "Text": "Follower"
                },
                {
                  "Text": ">"
                },
                {
                  "Text": "Innovator"
                }
              ]
            },
            {
              "Id": "qs_Firm_position_on_Product_Leadership",
              "Text": "10. Firm position on Product Leadership",
              "Choices": [
                {
                  "Text": "Imitator"
                },
                {
                  "Text": ">"
                },
                {
                  "Text": "Follower"
                },
                {
                  "Text": ">"
                },
                {
                  "Text": "Innovator"
                }
              ]
            },
            {
              "Id": "qs_Firm_position_on_Process_Leadership",
              "Text": "11. Firm position on Process Leadership",
              "Choices": [
                {
                  "Text": "Imitator"
                },
                {
                  "Text": ">"
                },
                {
                  "Text": "Follower"
                },
                {
                  "Text": ">"
                },
                {
                  "Text": "Innovator"
                }
              ]
            },
            {
              "Id": "qs_Firm_s_Risk_Propensity",
              "Text": "12. Firm's Risk Propensity",
              "Choices": [
                {
                  "Text": "Avoid"
                },
                {
                  "Text": "Accept"
                },
                {
                  "Text": "Seek familiar risks"
                },
                {
                  "Text": "Seek Unfamiliar risks"
                },
                {
                  "Text": "Embrace novel risks"
                }
              ]
            },
            {
              "Id": "qs_Frequency_of_New_Product_Introduction",
              "Text": "13. Frequency of New Product Introduction",
              "Choices": [
                {
                  "Text": "Rare (every 5 or more yrs)"
                },
                {
                  "Text": "Low (3-5 yrs)"
                },
                {
                  "Text": "Moderate (2-3 yrs)"
                },
                {
                  "Text": "High (every yr)"
                },
                {
                  "Text": "Very High (Several per yr)"
                }
              ]
            },
            {
              "Id": "qs_What_will_be_the_critical_innovation_success_factors_in_your_industry_in_the_next_2_5_yrs",
              "Text": "14. What will be the critical innovation success factors in your industry in the next 2-5 yrs?",
              "Choices": [
                {
                  "Text": "Cost Reduction"
                },
                {
                  "Text": "Reactive product improvement"
                },
                {
                  "Text": "Aggressive product improvement"
                },
                {
                  "Text": "Aggressive product innovation based on incremental improvements"
                },
                {
                  "Text": "Creation of radically new products based on discontinuous developments"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "Id": "catPresent_SA_Marketing",
      "Title": "Present SA - Marketing",
      "Description": "Present SA - Marketing",
      "SubCategories": [
        {
          "Id": "subMARKETING_AGGRESSIVENESS",
          "Title": "MARKETING AGGRESSIVENESS",
          "Description": "Strategic Aggressiveness Assessment (1-5)",
          "Questions": [
            {
              "Id": "qs_Firm_sales_Aggressiveness",
              "Text": "1. Firm sales Aggressiveness",
              "Choices": [
                {
                  "Text": "Low"
                },
                {
                  "Text": "Moderate"
                },
                {
                  "Text": "High"
                },
                {
                  "Text": "Very High"
                },
                {
                  "Text": "Single Focus"
                }
              ]
            },
            {
              "Id": "qs_Firm_Response_to_Competition",
              "Text": "2. Firm Response to Competition",
              "Choices": [
                {
                  "Text": "We do not compete'"
                },
                {
                  "Text": "We will respond to aggression'"
                },
                {
                  "Text": "We will not be undersold'"
                },
                {
                  "Text": "We are the market leader'"
                },
                {
                  "Text": "We are our own competition'"
                }
              ]
            },
            {
              "Id": "qs_Firm_Response_to_Customers_needs",
              "Text": "3. Firm Response to Customers needs",
              "Choices": [
                {
                  "Text": "Low"
                },
                {
                  "Text": "Moderate"
                },
                {
                  "Text": "High"
                },
                {
                  "Text": "Very High"
                },
                {
                  "Text": "Single Focus"
                }
              ]
            },
            {
              "Id": "qs_Sales_Network_development",
              "Text": "4. Sales Network development",
              "Choices": [
                {
                  "Text": "None"
                },
                {
                  "Text": "Below Average"
                },
                {
                  "Text": "Average"
                },
                {
                  "Text": "Above Average"
                },
                {
                  "Text": "Best in Class"
                }
              ]
            },
            {
              "Id": "qs_Service_Network_development",
              "Text": "5. Service Network development",
              "Choices": [
                {
                  "Text": "None"
                },
                {
                  "Text": "Below Average"
                },
                {
                  "Text": "Average"
                },
                {
                  "Text": "Above Average"
                },
                {
                  "Text": "Best in Class"
                }
              ]
            },
            {
              "Id": "qs_Market_share_Strategy",
              "Text": "6. Market share Strategy",
              "Choices": [
                {
                  "Text": "Organic Growth"
                },
                {
                  "Text": "Defend position"
                },
                {
                  "Text": "Increase"
                },
                {
                  "Text": "Control market segment"
                },
                {
                  "Text": "Dominate market segment"
                }
              ]
            },
            {
              "Id": "qs_Promotion_and_Advertising_Strategy",
              "Text": "7. Promotion and Advertising Strategy",
              "Choices": [
                {
                  "Text": "Our products sell themselves'"
                },
                {
                  "Text": "Reactive"
                },
                {
                  "Text": "Aggressive"
                },
                {
                  "Text": "Innovative"
                },
                {
                  "Text": "Creative"
                }
              ]
            },
            {
              "Id": "qs_Organizations_present_Marketing_Concept",
              "Text": "8. Organizations present Marketing Concept",
              "Choices": [
                {
                  "Text": "None"
                },
                {
                  "Text": "Traditional"
                },
                {
                  "Text": "Advanced"
                },
                {
                  "Text": "Innovative"
                },
                {
                  "Text": "Creative"
                }
              ]
            },
            {
              "Id": "qs_of_Firms_strategic_budget_spent_on_Marketing",
              "Text": "9. % of Firms strategic budget spent on Marketing",
              "Choices": [
                {
                  "Text": "Very low (less than 5%)"
                },
                {
                  "Text": "Low (5%-10%)"
                },
                {
                  "Text": "Moderate (10%-20%)"
                },
                {
                  "Text": "High (20%-30%)"
                },
                {
                  "Text": "Very High (more than 30%)"
                }
              ]
            },
            {
              "Id": "qs_Frequency_of_firm_introducing_new_products",
              "Text": "10. Frequency of firm introducing new products",
              "Choices": [
                {
                  "Text": "Infrequent (every 5 yrs or more)"
                },
                {
                  "Text": "Low (every two years)"
                },
                {
                  "Text": "Moderate"
                },
                {
                  "Text": "High"
                },
                {
                  "Text": "Very High (several per yr)"
                }
              ]
            },
            {
              "Id": "qs_Strategy_of_the_Marketing_Division",
              "Text": "11. Strategy of the Marketing Division",
              "Choices": [
                {
                  "Text": "To sell what the firm produces'"
                },
                {
                  "Text": "To convince customers that our products are superior'"
                },
                {
                  "Text": "To serve the customer'"
                },
                {
                  "Text": "To establish the firm as a marketing leader'"
                },
                {
                  "Text": "To establish the firm as a marketing innovator'"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "Id": "catCapabilities_Gen_l_Managers",
      "Title": "Capabilities - Gen'l Managers",
      "Description": "Capabilities - Gen'l Managers",
      "SubCategories": [
        {
          "Id": "subGENERAL_MANAGERS",
          "Title": "GENERAL MANAGERS",
          "Description": "Capabilitity Component Assessment (1-5)",
          "Questions": [
            {
              "Id": "qs_Current_Leadership_Style",
              "Text": "1. Current Leadership Style",
              "Choices": [
                {
                  "Text": "Political / Custodial"
                },
                {
                  "Text": "Disciplinary/ Controllership"
                },
                {
                  "Text": "Insprirational/ Common Purpose"
                },
                {
                  "Text": "Entrepreneurial/ dynamic"
                },
                {
                  "Text": "Creative/Futurist"
                }
              ]
            },
            {
              "Id": "qs_Problem_Solving_Skills",
              "Text": "2. Problem Solving Skills",
              "Choices": [
                {
                  "Text": "Trial and Error"
                },
                {
                  "Text": "Diagnostic"
                },
                {
                  "Text": "Optimization"
                },
                {
                  "Text": "Seek Alternatives"
                },
                {
                  "Text": "Creative"
                }
              ]
            },
            {
              "Id": "qs_Social_Judgment_Skills",
              "Text": "3. Social Judgment Skills",
              "Choices": [
                {
                  "Text": "Perspective taking"
                },
                {
                  "Text": "+"
                },
                {
                  "Text": "Social Perception"
                },
                {
                  "Text": "Behavioral flexibility"
                },
                {
                  "Text": "Social Performance"
                }
              ]
            },
            {
              "Id": "qs_Managers_Risk_Propensity",
              "Text": "4. Managers Risk Propensity",
              "Choices": [
                {
                  "Text": "Reject Risk"
                },
                {
                  "Text": "Accept familiar risks"
                },
                {
                  "Text": "Seek familiar risks"
                },
                {
                  "Text": "Seek new risks"
                },
                {
                  "Text": "Gamble on innovation"
                }
              ]
            },
            {
              "Id": "qs_Knowledge_base_of_Managers",
              "Text": "5. Knowledge base of Managers",
              "Choices": [
                {
                  "Text": "Internal Politics"
                },
                {
                  "Text": "Internal Operations"
                },
                {
                  "Text": "Traditional Markets"
                },
                {
                  "Text": "Global Environment"
                },
                {
                  "Text": "Emerging Environment"
                }
              ]
            },
            {
              "Id": "qs_Time_Orientation",
              "Text": "6. Time Orientation",
              "Choices": [
                {
                  "Text": "Based on Past Precedencs"
                },
                {
                  "Text": "Historical"
                },
                {
                  "Text": "Historical Extrapolated Future"
                },
                {
                  "Text": "New Future Opportunities"
                },
                {
                  "Text": "Invent the Future Opportunity"
                }
              ]
            },
            {
              "Id": "qs_External_vs_Internal_Orientation",
              "Text": "7. External vs. Internal Orientation",
              "Choices": [
                {
                  "Text": "Introverted"
                },
                {
                  "Text": ">>"
                },
                {
                  "Text": "<Balanced>"
                },
                {
                  "Text": ">>"
                },
                {
                  "Text": "Extroverted"
                }
              ]
            },
            {
              "Id": "qs_Intelligence",
              "Text": "8. Intelligence",
              "Choices": [
                {
                  "Text": "Custodial"
                },
                {
                  "Text": "Production Efficiency"
                },
                {
                  "Text": "Planning"
                },
                {
                  "Text": "Entrepreneurial"
                },
                {
                  "Text": "Creator"
                }
              ]
            },
            {
              "Id": "qs_General_Cognitive_Ability",
              "Text": "9. General Cognitive Ability",
              "Choices": [
                {
                  "Text": "Perceptual processing"
                },
                {
                  "Text": "Information processing"
                },
                {
                  "Text": "General reasoning"
                },
                {
                  "Text": "Creative reasoning"
                },
                {
                  "Text": "Divergent thinking"
                }
              ]
            },
            {
              "Id": "qs_Crystallized_Cognitive_Ability",
              "Text": "10. Crystallized Cognitive Ability",
              "Choices": [
                {
                  "Text": "Comprehension of Basic Information"
                },
                {
                  "Text": "Mastery of basic skills"
                },
                {
                  "Text": "Comprehension of Complex Information"
                },
                {
                  "Text": "Mastery of complex ideas"
                },
                {
                  "Text": "Communication of Complex Ideas"
                }
              ]
            },
            {
              "Id": "qs_Motivation",
              "Text": "11. Motivation",
              "Choices": [
                {
                  "Text": "Willingness"
                },
                {
                  "Text": "+"
                },
                {
                  "Text": "Dominance"
                },
                {
                  "Text": "+"
                },
                {
                  "Text": "Committed to Social Good"
                }
              ]
            },
            {
              "Id": "qs_Personality",
              "Text": "12. Personality",
              "Choices": [
                {
                  "Text": "Open"
                },
                {
                  "Text": "Tolerance for ambiguity"
                },
                {
                  "Text": "Curiosity"
                },
                {
                  "Text": "Confident"
                },
                {
                  "Text": "Adaptability"
                }
              ]
            },
            {
              "Id": "qs_Power_of_GM",
              "Text": "13. Power of GM",
              "Choices": [
                {
                  "Text": "Micro-Manage"
                },
                {
                  "Text": "Management by Objective"
                },
                {
                  "Text": "Innovation Management"
                },
                {
                  "Text": "Management by Exception"
                },
                {
                  "Text": "Mangement by Exception"
                }
              ]
            },
            {
              "Id": "qs_Managers_perception_of_success_factors",
              "Text": "14. Managers perception of success factors",
              "Choices": [
                {
                  "Text": "Stability/ Repitition"
                },
                {
                  "Text": "Growth/ Economies of Scale/ lowest price"
                },
                {
                  "Text": "Response to market needs/ image differentiation"
                },
                {
                  "Text": "Strategic Positioning/ balanced portfolio/ flexibility/ societal responsiveness"
                },
                {
                  "Text": "Technological creativity/ Creation of needs"
                }
              ]
            },
            {
              "Id": "qs_History_of_Effective_Problem_Solving",
              "Text": "15. History of Effective Problem Solving",
              "Choices": [
                {
                  "Text": "Basic solution+"
                },
                {
                  "Text": "Original solutions+"
                },
                {
                  "Text": "Logical solutions +"
                },
                {
                  "Text": "Effective solutions+"
                },
                {
                  "Text": "Unique solutions"
                }
              ]
            },
            {
              "Id": "qs_Do_the_firm_s_finance_accouting_managers_have_adequate_experience_and_training",
              "Text": "16. Do the firm’s finance/accouting managers have adequate experience and training?",
              "Choices": [
                {
                  "Text": "Position open and unfilled"
                },
                {
                  "Text": "Untrained/ basic education"
                },
                {
                  "Text": "Trained/ basic education in Finance/Accouting"
                },
                {
                  "Text": "Experience/advanced degree in Finance/Accounting"
                },
                {
                  "Text": "International experience/advanced degree in Finance/Accounting"
                }
              ]
            },
            {
              "Id": "qs_Do_the_firm_s_marketing_managers_have_adequate_experience_and_training",
              "Text": "17. Do the firm’s marketing managers have adequate experience and training?",
              "Choices": [
                {
                  "Text": "Position open and unfilled"
                },
                {
                  "Text": "Untrained/ basic education"
                },
                {
                  "Text": "Trained/ basic education in Marketing"
                },
                {
                  "Text": "Experience/advanced degree in marketing"
                },
                {
                  "Text": "International experience/advanced degree in marketing"
                }
              ]
            },
            {
              "Id": "qs_Do_the_firm_s_Operations_managers_have_adequate_experience_and_training",
              "Text": "18. Do the firm’s Operations managers have adequate experience and training?",
              "Choices": [
                {
                  "Text": "Position open and unfilled"
                },
                {
                  "Text": "Untrained/ basic education"
                },
                {
                  "Text": "Trained/ basic education in Operations"
                },
                {
                  "Text": "Experience/advanced degree in Operations"
                },
                {
                  "Text": "International experience/advanced degree in Operations"
                }
              ]
            },
            {
              "Id": "qs_Do_the_firm_s_Research_Development_managers_have_adequate_experience_and_training",
              "Text": "19. Do the firm’s Research & Development managers have adequate experience and training?",
              "Choices": [
                {
                  "Text": "Position open and unfilled"
                },
                {
                  "Text": "Untrained/ basic education"
                },
                {
                  "Text": "Trained/ basic education in R&D"
                },
                {
                  "Text": "Experience/advanced degree in R&D"
                },
                {
                  "Text": "International experience/advanced degree in R&D"
                }
              ]
            },
            {
              "Id": "qs_Do_the_firm_s_MIS_managers_have_adequate_experience_and_training",
              "Text": "20. Do the firm’s MIS managers have adequate experience and training?",
              "Choices": [
                {
                  "Text": "Position open and unfilled"
                },
                {
                  "Text": "Untrained/ basic education"
                },
                {
                  "Text": "Trained/ basic education in Information Systems"
                },
                {
                  "Text": "Experience/advanced degree in Information Systems"
                },
                {
                  "Text": "International experience/advanced degree in Information Systems"
                }
              ]
            },
            {
              "Id": "qs_Do_the_firm_s_Sales_managers_have_adequate_experience_and_training",
              "Text": "21. Do the firm's Sales managers have adequate experience and training?",
              "Choices": [
                {
                  "Text": "Position open and unfilled"
                },
                {
                  "Text": "Untrained/ basic education"
                },
                {
                  "Text": "Trained/ basic education in Sales Leadership"
                },
                {
                  "Text": "Experience/advanced degree in Behavioral Science"
                },
                {
                  "Text": "International experience/advanced degree in Behavioral Science"
                }
              ]
            },
            {
              "Id": "qs_History_of_Management_Performance",
              "Text": "22. History of Management Performance",
              "Choices": [
                {
                  "Text": "Low"
                },
                {
                  "Text": "+"
                },
                {
                  "Text": "Moderate"
                },
                {
                  "Text": "+"
                },
                {
                  "Text": "High"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "Id": "catCapabilities_Culture",
      "Title": "Capabilities - Culture",
      "Description": "Capabilities - Culture",
      "SubCategories": [
        {
          "Id": "subCULTURE",
          "Title": "CULTURE",
          "Description": "Capabilitity Component Assessment (1-5)",
          "Questions": [
            {
              "Id": "qs_Current_Rewards_and_Incentives",
              "Text": "1. Current Rewards and Incentives",
              "Choices": [
                {
                  "Text": "Length of service"
                },
                {
                  "Text": "Past Performance"
                },
                {
                  "Text": "Contribution to future growth"
                },
                {
                  "Text": "Entrepreneurship"
                },
                {
                  "Text": "Creativity"
                }
              ]
            },
            {
              "Id": "qs_Values_and_Attitudes",
              "Text": "2. Values and Attitudes",
              "Choices": [
                {
                  "Text": "Stability"
                },
                {
                  "Text": "Adaptation"
                },
                {
                  "Text": "Grow"
                },
                {
                  "Text": "Diversify"
                },
                {
                  "Text": "Create"
                }
              ]
            },
            {
              "Id": "qs_Attitude_toward_Change",
              "Text": "3. Attitude toward Change",
              "Choices": [
                {
                  "Text": "Reject"
                },
                {
                  "Text": "React"
                },
                {
                  "Text": "Seek familiar change"
                },
                {
                  "Text": "Seek Novel change"
                },
                {
                  "Text": "Create change"
                }
              ]
            },
            {
              "Id": "qs_Propensity_toward_Risk_Taking",
              "Text": "4. Propensity toward Risk Taking",
              "Choices": [
                {
                  "Text": "Avoid"
                },
                {
                  "Text": "Only when forced"
                },
                {
                  "Text": "Tolerates"
                },
                {
                  "Text": "Accepts Moderate Risk"
                },
                {
                  "Text": "Accepts High Risk"
                }
              ]
            },
            {
              "Id": "qs_What_Triggers_the_need_for_Change",
              "Text": "5. What Triggers the need for Change",
              "Choices": [
                {
                  "Text": "Crisis"
                },
                {
                  "Text": "Accumulation of Unsatisfactory performance"
                },
                {
                  "Text": "Responding to market"
                },
                {
                  "Text": "Seeking Change"
                },
                {
                  "Text": "Creating Change"
                }
              ]
            },
            {
              "Id": "qs_Time_Perspective_in_which_Management_perceives_its_problems",
              "Text": "6. Time Perspective in which Management perceives its problems",
              "Choices": [
                {
                  "Text": "Past"
                },
                {
                  "Text": ">"
                },
                {
                  "Text": "Present"
                },
                {
                  "Text": ">"
                },
                {
                  "Text": "Future"
                }
              ]
            },
            {
              "Id": "qs_Strength_of_union_influence_on_firm_culture",
              "Text": "7. Strength of union influence on firm culture",
              "Choices": [
                {
                  "Text": "High/Advisarial"
                },
                {
                  "Text": "High/Negotiable"
                },
                {
                  "Text": "Moderate Participatory"
                },
                {
                  "Text": "Low"
                },
                {
                  "Text": "None"
                }
              ]
            },
            {
              "Id": "qs_Employee_morale",
              "Text": "8. Employee morale",
              "Choices": [
                {
                  "Text": "Low"
                },
                {
                  "Text": ">"
                },
                {
                  "Text": "Moderate"
                },
                {
                  "Text": ">"
                },
                {
                  "Text": "High"
                }
              ]
            },
            {
              "Id": "qs_Employee_absenteeism",
              "Text": "9. Employee absenteeism",
              "Choices": [
                {
                  "Text": "High"
                },
                {
                  "Text": ">"
                },
                {
                  "Text": "Moderate"
                },
                {
                  "Text": ">"
                },
                {
                  "Text": "Low"
                }
              ]
            },
            {
              "Id": "qs_Employee_turnover",
              "Text": "10. Employee turnover",
              "Choices": [
                {
                  "Text": "High"
                },
                {
                  "Text": ">"
                },
                {
                  "Text": "Moderate"
                },
                {
                  "Text": ">"
                },
                {
                  "Text": "Low"
                }
              ]
            },
            {
              "Id": "qs_Success_Criterion",
              "Text": "11. Success Criterion",
              "Choices": [
                {
                  "Text": "Stability"
                },
                {
                  "Text": "Efficiency/ Performance"
                },
                {
                  "Text": "Effective Response to competition and market needs"
                },
                {
                  "Text": "Dynamic balance of the organization portfolio/ Growth"
                },
                {
                  "Text": "Innovation leadership"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "Id": "catCapabilities_Structure",
      "Title": "Capabilities - Structure",
      "Description": "Capabilities - Structure",
      "SubCategories": [
        {
          "Id": "subSTRUCTURE",
          "Title": "STRUCTURE",
          "Description": "Capabilitity Component Assessment (1-5)",
          "Questions": [
            {
              "Id": "qs_Current_Organizational_Form",
              "Text": "1. Current Organizational Form",
              "Choices": [
                {
                  "Text": "Bureaucratic"
                },
                {
                  "Text": "Functional"
                },
                {
                  "Text": "Divisional"
                },
                {
                  "Text": "Matrix/ New Venture"
                },
                {
                  "Text": "Flexible structure"
                }
              ]
            },
            {
              "Id": "qs_Organizational_structure_focus",
              "Text": "2. Organizational structure focus",
              "Choices": [
                {
                  "Text": "Specific task"
                },
                {
                  "Text": "Performance"
                },
                {
                  "Text": "Organic Growth"
                },
                {
                  "Text": "Industry Opportunity"
                },
                {
                  "Text": "Industry Growth"
                }
              ]
            },
            {
              "Id": "qs_Organizationa_Structural_Flexibility",
              "Text": "3. Organizationa Structural Flexibility",
              "Choices": [
                {
                  "Text": "Rigid"
                },
                {
                  "Text": "Low Flexibility"
                },
                {
                  "Text": "Moderate Flexibility"
                },
                {
                  "Text": "Adaptive"
                },
                {
                  "Text": "Highly Adaptive"
                }
              ]
            },
            {
              "Id": "qs_Current_System",
              "Text": "4. Current System",
              "Choices": [
                {
                  "Text": "Control"
                },
                {
                  "Text": "Budgeting"
                },
                {
                  "Text": "LRP"
                },
                {
                  "Text": "Strategic Planning"
                },
                {
                  "Text": "Issue/Surprise Management"
                }
              ]
            },
            {
              "Id": "qs_Management_Focus",
              "Text": "5. Management Focus",
              "Choices": [
                {
                  "Text": "Control of deviation"
                },
                {
                  "Text": "Allocation of resources"
                },
                {
                  "Text": "Coordination of growth/profits"
                },
                {
                  "Text": "Management of Strategic Innovation"
                },
                {
                  "Text": "Management of Partially/ unpredictable change"
                }
              ]
            },
            {
              "Id": "qs_Primary_purpose_of_structure",
              "Text": "6. Primary purpose of structure",
              "Choices": [
                {
                  "Text": "Maintain status quo"
                },
                {
                  "Text": "Minimize operating costs of the firm"
                },
                {
                  "Text": "Optimize the firm's profits"
                },
                {
                  "Text": "Develop the firm's near term profit potential"
                },
                {
                  "Text": "Develop the firm's long term profit potential"
                }
              ]
            },
            {
              "Id": "qs_Power_Center_within_the_organization",
              "Text": "7. Power Center within the organization",
              "Choices": [
                {
                  "Text": "Bureaucratic"
                },
                {
                  "Text": "Production"
                },
                {
                  "Text": "Marketing"
                },
                {
                  "Text": "General Management"
                },
                {
                  "Text": "Research & Development"
                }
              ]
            },
            {
              "Id": "qs_Current_Organization_has_too_many_levels_of_management",
              "Text": "8. Current Organization has too many levels of management",
              "Choices": [
                {
                  "Text": "Strongly Agree"
                },
                {
                  "Text": "Agree"
                },
                {
                  "Text": "< >"
                },
                {
                  "Text": "Disagree"
                },
                {
                  "Text": "Strongly Disagree"
                }
              ]
            },
            {
              "Id": "qs_Our_organization_has_too_many_meeting_attended_by_too_many_people",
              "Text": "9. Our organization has too many meeting attended by too many people",
              "Choices": [
                {
                  "Text": "Strongly Agree"
                },
                {
                  "Text": "Agree"
                },
                {
                  "Text": "< >"
                },
                {
                  "Text": "Disagree"
                },
                {
                  "Text": "Strongly Disagree"
                }
              ]
            },
            {
              "Id": "qs_Too_much_attention_is_directed_toward_solving_interdepartmental_conflicts",
              "Text": "10. Too much attention is directed toward solving interdepartmental conflicts",
              "Choices": [
                {
                  "Text": "Strongly Agree"
                },
                {
                  "Text": "Agree"
                },
                {
                  "Text": "< >"
                },
                {
                  "Text": "Disagree"
                },
                {
                  "Text": "Strongly Disagree"
                }
              ]
            },
            {
              "Id": "qs_Functional_departments_have_too_large_of_a_span_of_control",
              "Text": "11. Functional departments have too large of a span of control",
              "Choices": [
                {
                  "Text": "Strongly Agree"
                },
                {
                  "Text": "Agree"
                },
                {
                  "Text": "< >"
                },
                {
                  "Text": "Disagree"
                },
                {
                  "Text": "Strongly Disagree"
                }
              ]
            },
            {
              "Id": "qs_Organization_has_too_many_unachieved_objectives",
              "Text": "12. Organization has too many unachieved objectives",
              "Choices": [
                {
                  "Text": "Strongly Agree"
                },
                {
                  "Text": "Agree"
                },
                {
                  "Text": "< >"
                },
                {
                  "Text": "Disagree"
                },
                {
                  "Text": "Strongly Disagree"
                }
              ]
            },
            {
              "Id": "qs_Revenue_and_or_earnings_divided_by_the_number_of_managers_is_low_compared_to_rivals",
              "Text": "13. Revenue and/or earnings divided by the number of managers is low compared to rivals",
              "Choices": [
                {
                  "Text": "Strongly Agree"
                },
                {
                  "Text": "Agree"
                },
                {
                  "Text": "< >"
                },
                {
                  "Text": "Disagree"
                },
                {
                  "Text": "Strongly Disagree"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "Id": "catCapabilities_Systems",
      "Title": "Capabilities - Systems",
      "Description": "Capabilities - Systems",
      "SubCategories": [
        {
          "Id": "subSYSTEMS",
          "Title": "SYSTEMS",
          "Description": "Capabilitity Component Assessment (1-5)",
          "Questions": [
            {
              "Id": "qs_Current_Information_gathering_system",
              "Text": "1. Current Information gathering system",
              "Choices": [
                {
                  "Text": "Precedent based"
                },
                {
                  "Text": "Historical success"
                },
                {
                  "Text": "Extrapolated Future"
                },
                {
                  "Text": "Scenario Planning/ 'what-if scenarios'"
                },
                {
                  "Text": "Artificial Intellegence/Data Mining"
                }
              ]
            },
            {
              "Id": "qs_Current_purpose_priority_of_systems_within_organization",
              "Text": "2. Current purpose priority of systems within organization",
              "Choices": [
                {
                  "Text": "Status Quo"
                },
                {
                  "Text": "Performance"
                },
                {
                  "Text": "Growth"
                },
                {
                  "Text": "New Opportunities"
                },
                {
                  "Text": "Creativity"
                }
              ]
            },
            {
              "Id": "qs_Organizations_problem_trigger",
              "Text": "3. Organizations problem 'trigger'",
              "Choices": [
                {
                  "Text": "React to crisis"
                },
                {
                  "Text": "Accumulation of unsatisfactory performance"
                },
                {
                  "Text": "Anticipated threats"
                },
                {
                  "Text": "New Opportunities"
                },
                {
                  "Text": "Breakthroughs"
                }
              ]
            },
            {
              "Id": "qs_Organizations_system_for_decision_making_strategy",
              "Text": "4. Organizations system for decision making strategy",
              "Choices": [
                {
                  "Text": "Systems & Proceedures"
                },
                {
                  "Text": "Budgeting"
                },
                {
                  "Text": "Extrapolative strategic planning"
                },
                {
                  "Text": "Entrepreneurial strategic planning/ capability planning"
                },
                {
                  "Text": "Strategic Issue management / Crisis management"
                }
              ]
            },
            {
              "Id": "qs_Current_Systems_typical_problems",
              "Text": "5. Current Systems typical problems",
              "Choices": [
                {
                  "Text": "Control of Deviation"
                },
                {
                  "Text": "Resource allocation"
                },
                {
                  "Text": "Coordinating growth/profits"
                },
                {
                  "Text": "Strategic Coherence"
                },
                {
                  "Text": "Management of discontinuous changes"
                }
              ]
            },
            {
              "Id": "qs_Procedures_for_Systems_Improvement",
              "Text": "6. Procedures for Systems Improvement",
              "Choices": [
                {
                  "Text": "None"
                },
                {
                  "Text": "When forced by competition"
                },
                {
                  "Text": "Accommodate current growth"
                },
                {
                  "Text": "Planned for Future Capability Needs"
                },
                {
                  "Text": "Planned for Future Creative Capability Needs"
                }
              ]
            },
            {
              "Id": "qs_Which_phrase_best_describes_the_organization_when_control_is_lost",
              "Text": "7. Which phrase best describes the organization when control is lost",
              "Choices": [
                {
                  "Text": "Diviation from stable state"
                },
                {
                  "Text": "Deviation from budgets"
                },
                {
                  "Text": "Deviation from plans"
                },
                {
                  "Text": "Seek new opportunities"
                },
                {
                  "Text": "Creative drive"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "Id": "catCapabilities_Tech_Capacity",
      "Title": "Capabilities - Tech-Capacity",
      "Description": "Capabilities - Tech-Capacity",
      "SubCategories": [
        {
          "Id": "subMANAGEMENT_TECHNOLOGY",
          "Title": "MANAGEMENT TECHNOLOGY",
          "Description": "Capabilitity Component Assessment (1-5)",
          "Questions": [
            {
              "Id": "qs_Current_Analytical_Model_being_used_by_organization",
              "Text": "1. Current Analytical Model being used by organization",
              "Choices": [
                {
                  "Text": "Standard proceedures"
                },
                {
                  "Text": "Work study/ Ratio analysis/ Equipment replacement"
                },
                {
                  "Text": "Capital budgeting/ Optimization"
                },
                {
                  "Text": "Futurology"
                },
                {
                  "Text": "Creativity"
                }
              ]
            },
            {
              "Id": "qs_Process_Technology_Level",
              "Text": "2. Process Technology Level",
              "Choices": [
                {
                  "Text": "None"
                },
                {
                  "Text": "Low"
                },
                {
                  "Text": "Moderate"
                },
                {
                  "Text": "Advanced"
                },
                {
                  "Text": "Industry Leader"
                }
              ]
            },
            {
              "Id": "qs_Technology_Acquisition",
              "Text": "3. Technology Acquisition",
              "Choices": [
                {
                  "Text": "Minimal"
                },
                {
                  "Text": "Reactive"
                },
                {
                  "Text": "Proactive"
                },
                {
                  "Text": "Opportunity Seeking"
                },
                {
                  "Text": "Opportunity Creating"
                }
              ]
            },
            {
              "Id": "qs_Product_Service_Innovation",
              "Text": "4. Product/Service Innovation",
              "Choices": [
                {
                  "Text": "None"
                },
                {
                  "Text": "Low"
                },
                {
                  "Text": "Moderate"
                },
                {
                  "Text": "High"
                },
                {
                  "Text": "Industry Leader"
                }
              ]
            },
            {
              "Id": "qs_Investment_in_Technology",
              "Text": "5. Investment in Technology",
              "Choices": [
                {
                  "Text": "None"
                },
                {
                  "Text": "Low"
                },
                {
                  "Text": "Moderate"
                },
                {
                  "Text": "High"
                },
                {
                  "Text": "Industry Leader"
                }
              ]
            },
            {
              "Id": "qs_Frequency_of_new_Technology",
              "Text": "6. Frequency of new Technology",
              "Choices": [
                {
                  "Text": "None"
                },
                {
                  "Text": "Low"
                },
                {
                  "Text": "Moderate"
                },
                {
                  "Text": "High"
                },
                {
                  "Text": "Industry Leader"
                }
              ]
            },
            {
              "Id": "qs_Technology_as_a_Competitive_tool",
              "Text": "7. Technology as a Competitive tool",
              "Choices": [
                {
                  "Text": "Unimportant"
                },
                {
                  "Text": ">"
                },
                {
                  "Text": "Moderate"
                },
                {
                  "Text": ">"
                },
                {
                  "Text": "Essential"
                }
              ]
            },
            {
              "Id": "qs_Technological_positioning",
              "Text": "8. Technological positioning",
              "Choices": [
                {
                  "Text": "Imitator"
                },
                {
                  "Text": ">"
                },
                {
                  "Text": "Follower"
                },
                {
                  "Text": ">"
                },
                {
                  "Text": "Innovator"
                }
              ]
            },
            {
              "Id": "qs_Does_the_firm_have_technological_competence",
              "Text": "9. Does the firm have technological competence",
              "Choices": [
                {
                  "Text": "None"
                },
                {
                  "Text": "Developing"
                },
                {
                  "Text": "Industry Parity"
                },
                {
                  "Text": "Advanced"
                },
                {
                  "Text": "Industry Leader"
                }
              ]
            },
            {
              "Id": "qs_Current_Technological_Surveillance_system_being_used_by_organization",
              "Text": "10. Current Technological Surveillance system being used by organization",
              "Choices": [
                {
                  "Text": "Statistical Files"
                },
                {
                  "Text": "Statistical performance control"
                },
                {
                  "Text": "Performance Extrapolation"
                },
                {
                  "Text": "Non-linear forecasting/ what-if models"
                },
                {
                  "Text": "Artificial Intellegence"
                }
              ]
            }
          ]
        },
        {
          "Id": "subMANAGEMENT_CAPACITY",
          "Title": "MANAGEMENT CAPACITY",
          "Description": "Capabilitity Component Assessment (1-5)",
          "Questions": [
            {
              "Id": "qs_Which_term_best_describes_the_capacity_of_your_organization_s_general_management",
              "Text": "1. Which term best describes the capacity of your organization's general management",
              "Choices": [
                {
                  "Text": "Minimal"
                },
                {
                  "Text": "Adequate for breakeven"
                },
                {
                  "Text": "Sufficient for profit making work"
                },
                {
                  "Text": "Sufficient for strategic and profit making work"
                },
                {
                  "Text": "Sufficient for creativity/ strategic/ and profit making work"
                }
              ]
            },
            {
              "Id": "qs_Which_term_best_describes_the_capacity_of_your_organizations_s_staff",
              "Text": "2. Which term best describes the capacity of your organizations's staff",
              "Choices": [
                {
                  "Text": "Minimal"
                },
                {
                  "Text": "Adequate for breakeven"
                },
                {
                  "Text": "Sufficient for profit making work"
                },
                {
                  "Text": "Sufficient for strategic and profit making work"
                },
                {
                  "Text": "Sufficient for creativity/ strategic/ and profit making work"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "Id": "catStrategic_Budget",
      "Title": "Strategic Budget",
      "Description": "Strategic Budget",
      "SubCategories": [
        {
          "Id": "subEFFECTIVE_CAPACITY_INVESTMENT_RELATIVE_TO_MARKET_LEADER",
          "Title": "EFFECTIVE CAPACITY INVESTMENT (RELATIVE TO MARKET LEADER)",
          "Description": "Capacity Investment Assessment (1-5)",
          "Questions": [
            {
              "Id": "qs_Production_facilities",
              "Text": "1. Production facilities",
              "Choices": [
                {
                  "Text": "1 0%-10%"
                },
                {
                  "Text": "2 11%-29%"
                },
                {
                  "Text": "3 30% - 59%"
                },
                {
                  "Text": "4 60% -79%"
                },
                {
                  "Text": "5 Industry leader - 80-100%"
                }
              ]
            },
            {
              "Id": "qs_Distribution_network",
              "Text": "2. Distribution network",
              "Choices": [
                {
                  "Text": "1 0%-10%"
                },
                {
                  "Text": "2 11%-29%"
                },
                {
                  "Text": "3 30% - 59%"
                },
                {
                  "Text": "4 60% -79%"
                },
                {
                  "Text": "5 Industry leader - 80-100%"
                }
              ]
            },
            {
              "Id": "qs_Marketing",
              "Text": "3. Marketing",
              "Choices": [
                {
                  "Text": "1 0%-10%"
                },
                {
                  "Text": "2 11%-29%"
                },
                {
                  "Text": "3 30% - 59%"
                },
                {
                  "Text": "4 60% -79%"
                },
                {
                  "Text": "5 Industry leader - 80-100%"
                }
              ]
            },
            {
              "Id": "qs_Acquisition_of_personnel",
              "Text": "4. Acquisition of personnel",
              "Choices": [
                {
                  "Text": "1 0%-10%"
                },
                {
                  "Text": "2 11%-29%"
                },
                {
                  "Text": "3 30% - 59%"
                },
                {
                  "Text": "4 60% -79%"
                },
                {
                  "Text": "5 Industry leader - 80-100%"
                }
              ]
            },
            {
              "Id": "qs_Training_of_personnel",
              "Text": "5. Training of personnel",
              "Choices": [
                {
                  "Text": "1 0%-10%"
                },
                {
                  "Text": "2 11%-29%"
                },
                {
                  "Text": "3 30% - 59%"
                },
                {
                  "Text": "4 60% -79%"
                },
                {
                  "Text": "5 Industry leader - 80-100%"
                }
              ]
            },
            {
              "Id": "qs_Acquisition_of_Technology",
              "Text": "6. Acquisition of Technology",
              "Choices": [
                {
                  "Text": "1 0%-10%"
                },
                {
                  "Text": "2 11%-29%"
                },
                {
                  "Text": "3 30% - 59%"
                },
                {
                  "Text": "4 60% -79%"
                },
                {
                  "Text": "5 Industry leader - 80-100%"
                }
              ]
            },
            {
              "Id": "qs_Costs_of_Systems_integration",
              "Text": "7. Costs of Systems integration",
              "Choices": [
                {
                  "Text": "1 0%-10%"
                },
                {
                  "Text": "2 11%-29%"
                },
                {
                  "Text": "3 30% - 59%"
                },
                {
                  "Text": "4 60% -79%"
                },
                {
                  "Text": "5 Industry leader - 80-100%"
                }
              ]
            },
            {
              "Id": "qs_Machinery",
              "Text": "8. Machinery",
              "Choices": [
                {
                  "Text": "1 0%-10%"
                },
                {
                  "Text": "2 11%-29%"
                },
                {
                  "Text": "3 30% - 59%"
                },
                {
                  "Text": "4 60% -79%"
                },
                {
                  "Text": "5 Industry leader - 80-100%"
                }
              ]
            },
            {
              "Id": "qs_Research_and_Development",
              "Text": "9. Research and Development",
              "Choices": [
                {
                  "Text": "1 0%-10%"
                },
                {
                  "Text": "2 11%-29%"
                },
                {
                  "Text": "3 30% - 59%"
                },
                {
                  "Text": "4 60% -79%"
                },
                {
                  "Text": "5 Industry leader - 80-100%"
                }
              ]
            }
          ]
        },
        {
          "Id": "subSTRATEGIC_INVESTMENT_RELATIVE_TO_MARKET_LEADER",
          "Title": "STRATEGIC INVESTMENT (RELATIVE TO MARKET LEADER)",
          "Description": "Strategic Investment Assessment (1-5)",
          "Questions": [
            {
              "Id": "qs_Strategic_Planning",
              "Text": "1. Strategic Planning",
              "Choices": [
                {
                  "Text": "1 0%-10%"
                },
                {
                  "Text": "2 11%-29%"
                },
                {
                  "Text": "3 30% - 59%"
                },
                {
                  "Text": "4 60% -79%"
                },
                {
                  "Text": "5 Industry leader - 80-100%"
                }
              ]
            },
            {
              "Id": "qs_Market_Research",
              "Text": "2. Market Research",
              "Choices": [
                {
                  "Text": "1 0%-10%"
                },
                {
                  "Text": "2 11%-29%"
                },
                {
                  "Text": "3 30% - 59%"
                },
                {
                  "Text": "4 60% -79%"
                },
                {
                  "Text": "5 Industry leader - 80-100%"
                }
              ]
            },
            {
              "Id": "qs_Market_Testing",
              "Text": "3. Market Testing",
              "Choices": [
                {
                  "Text": "1 0%-10%"
                },
                {
                  "Text": "2 11%-29%"
                },
                {
                  "Text": "3 30% - 59%"
                },
                {
                  "Text": "4 60% -79%"
                },
                {
                  "Text": "5 Industry leader - 80-100%"
                }
              ]
            },
            {
              "Id": "qs_Management_Training",
              "Text": "4. Management Training",
              "Choices": [
                {
                  "Text": "1 0%-10%"
                },
                {
                  "Text": "2 11%-29%"
                },
                {
                  "Text": "3 30% - 59%"
                },
                {
                  "Text": "4 60% -79%"
                },
                {
                  "Text": "5 Industry leader - 80-100%"
                }
              ]
            },
            {
              "Id": "qs_Product_Development",
              "Text": "5. Product Development",
              "Choices": [
                {
                  "Text": "1 0%-10%"
                },
                {
                  "Text": "2 11%-29%"
                },
                {
                  "Text": "3 30% - 59%"
                },
                {
                  "Text": "4 60% -79%"
                },
                {
                  "Text": "5 Industry leader - 80-100%"
                }
              ]
            },
            {
              "Id": "qs_Process_Technology",
              "Text": "6. Process Technology",
              "Choices": [
                {
                  "Text": "1 0%-10%"
                },
                {
                  "Text": "2 11%-29%"
                },
                {
                  "Text": "3 30% - 59%"
                },
                {
                  "Text": "4 60% -79%"
                },
                {
                  "Text": "5 Industry leader - 80-100%"
                }
              ]
            },
            {
              "Id": "qs_Automation",
              "Text": "7. Automation",
              "Choices": [
                {
                  "Text": "1 0%-10%"
                },
                {
                  "Text": "2 11%-29%"
                },
                {
                  "Text": "3 30% - 59%"
                },
                {
                  "Text": "4 60% -79%"
                },
                {
                  "Text": "5 Industry leader - 80-100%"
                }
              ]
            },
            {
              "Id": "qs_Computer_Assisted_Production",
              "Text": "8. Computer Assisted Production",
              "Choices": [
                {
                  "Text": "1 0%-10%"
                },
                {
                  "Text": "2 11%-29%"
                },
                {
                  "Text": "3 30% - 59%"
                },
                {
                  "Text": "4 60% -79%"
                },
                {
                  "Text": "5 Industry leader - 80-100%"
                }
              ]
            },
            {
              "Id": "qs_Strategy_Development",
              "Text": "9. Strategy Development",
              "Choices": [
                {
                  "Text": "1 0%-10%"
                },
                {
                  "Text": "2 11%-29%"
                },
                {
                  "Text": "3 30% - 59%"
                },
                {
                  "Text": "4 60% -79%"
                },
                {
                  "Text": "5 Industry leader - 80-100%"
                }
              ]
            },
            {
              "Id": "qs_Capability_Development",
              "Text": "10. Capability Development",
              "Choices": [
                {
                  "Text": "1 0%-10%"
                },
                {
                  "Text": "2 11%-29%"
                },
                {
                  "Text": "3 30% - 59%"
                },
                {
                  "Text": "4 60% -79%"
                },
                {
                  "Text": "5 Industry leader - 80-100%"
                }
              ]
            },
            {
              "Id": "qs_New_Facilities_Equipment",
              "Text": "11. New Facilities & Equipment",
              "Choices": [
                {
                  "Text": "1 0%-10%"
                },
                {
                  "Text": "2 11%-29%"
                },
                {
                  "Text": "3 30% - 59%"
                },
                {
                  "Text": "4 60% -79%"
                },
                {
                  "Text": "5 Industry leader - 80-100%"
                }
              ]
            },
            {
              "Id": "qs_Product_Launching",
              "Text": "12. Product Launching",
              "Choices": [
                {
                  "Text": "1 0%-10%"
                },
                {
                  "Text": "2 11%-29%"
                },
                {
                  "Text": "3 30% - 59%"
                },
                {
                  "Text": "4 60% -79%"
                },
                {
                  "Text": "5 Industry leader - 80-100%"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "Id": "catFuture_Competitive_Position",
      "Title": "Future Competitive Position",
      "Description": "Future Competitive Position",
      "SubCategories": [
        {
          "Id": "subFuture_Competitive_Position",
          "Title": "Future Competitive Position",
          "Description": "Future Competitive Position (1-5)",
          "Questions": [
            {
              "Id": "qs_Frequency_of_the_firm_introducing_new_products_into_the_industry",
              "Text": "1. Frequency of the firm introducing new products into the industry",
              "Choices": [
                {
                  "Text": "Infrequent (every 5 yrs or more)"
                },
                {
                  "Text": "Low"
                },
                {
                  "Text": "Moderate"
                },
                {
                  "Text": "High"
                },
                {
                  "Text": "Very High (several per yr)"
                }
              ]
            },
            {
              "Id": "qs_Firm_s_number_of_competing_technologies",
              "Text": "2. Firm's number of competing technologies",
              "Choices": [
                {
                  "Text": "None"
                },
                {
                  "Text": "None"
                },
                {
                  "Text": "More than 1"
                },
                {
                  "Text": "<5"
                },
                {
                  "Text": "5>"
                }
              ]
            },
            {
              "Id": "qs_Rate_of_technological_change",
              "Text": "3. Rate of technological change",
              "Choices": [
                {
                  "Text": "Low"
                },
                {
                  "Text": "Slow/ Incremental"
                },
                {
                  "Text": "Moderate"
                },
                {
                  "Text": "Fast/ Discontinuous"
                },
                {
                  "Text": "Surpriseful/ Discontinuous"
                }
              ]
            },
            {
              "Id": "qs_Product_performance_differentiation",
              "Text": "4. Product performance differentiation",
              "Choices": [
                {
                  "Text": "None"
                },
                {
                  "Text": "Low"
                },
                {
                  "Text": "Moderate"
                },
                {
                  "Text": "High"
                },
                {
                  "Text": "Disruptive"
                }
              ]
            },
            {
              "Id": "qs_Firm_s_access_to_Distribution_Channels",
              "Text": "5. Firm's access to Distribution Channels",
              "Choices": [
                {
                  "Text": "None"
                },
                {
                  "Text": "Limited"
                },
                {
                  "Text": "Moderate"
                },
                {
                  "Text": "High"
                },
                {
                  "Text": "Unlimited"
                }
              ]
            },
            {
              "Id": "qs_Firm_s_sale_aggressiveness",
              "Text": "6. Firm's sale aggressiveness",
              "Choices": [
                {
                  "Text": "Low"
                },
                {
                  "Text": "Moderate"
                },
                {
                  "Text": "High"
                },
                {
                  "Text": "Very High"
                },
                {
                  "Text": "Single Focus"
                }
              ]
            },
            {
              "Id": "qs_Responsiveness_to_competition",
              "Text": "7. Responsiveness to competition",
              "Choices": [
                {
                  "Text": "None"
                },
                {
                  "Text": "Reactive"
                },
                {
                  "Text": "Anticipatory"
                },
                {
                  "Text": "Proactive"
                },
                {
                  "Text": "Disruptive"
                }
              ]
            },
            {
              "Id": "qs_Profit_margin_relative_to_competition",
              "Text": "9. Profit margin (relative to competition)",
              "Choices": [
                {
                  "Text": "Very low"
                },
                {
                  "Text": "Low"
                },
                {
                  "Text": "Moderate"
                },
                {
                  "Text": "High"
                },
                {
                  "Text": "Very High"
                }
              ]
            },
            {
              "Id": "qs_of_overall_strategic_budget_spent_on_marketing",
              "Text": "10. % of overall strategic budget spent on marketing",
              "Choices": [
                {
                  "Text": "Very low (less than 5%)"
                },
                {
                  "Text": "Low (5%-10%)"
                },
                {
                  "Text": "Moderate (10%-20%)"
                },
                {
                  "Text": "High (20%-30%)"
                },
                {
                  "Text": "Very High (more than 30%)"
                }
              ]
            },
            {
              "Id": "qs_Product_leadership",
              "Text": "11. Product leadership",
              "Choices": [
                {
                  "Text": "Follower"
                },
                {
                  "Text": "2nd mover"
                },
                {
                  "Text": "1st mover"
                },
                {
                  "Text": "Innovator"
                },
                {
                  "Text": "Creator"
                }
              ]
            },
            {
              "Id": "qs_Firm_s_production_Capacity",
              "Text": "12. Firm's production Capacity",
              "Choices": [
                {
                  "Text": "<< demand"
                },
                {
                  "Text": "< demand"
                },
                {
                  "Text": "Match Demand"
                },
                {
                  "Text": ">Excess"
                },
                {
                  "Text": ">> Excess"
                }
              ]
            },
            {
              "Id": "qs_Management_s_knowledge_of_Environment",
              "Text": "13. Management's knowledge of Environment",
              "Choices": [
                {
                  "Text": "Historical"
                },
                {
                  "Text": "Extrapolative based on Historical data"
                },
                {
                  "Text": "Predictive/ threat-opportunity analysis"
                },
                {
                  "Text": "Deductive analysis"
                },
                {
                  "Text": "Impact analysis"
                }
              ]
            },
            {
              "Id": "qs_Frequency_of_firm_introducing_new_technologies_in_industry",
              "Text": "14. Frequency of firm introducing new technologies in industry",
              "Choices": [
                {
                  "Text": "Infrequent (every 5 yrs or more)"
                },
                {
                  "Text": "Low (every 3 yrs)"
                },
                {
                  "Text": "Moderate (every yr)"
                },
                {
                  "Text": "High"
                },
                {
                  "Text": "Very High (several per yr)"
                }
              ]
            },
            {
              "Id": "qs_Firm_s_competitive_Intensity",
              "Text": "15. Firm's competitive Intensity",
              "Choices": [
                {
                  "Text": "None"
                },
                {
                  "Text": "Low"
                },
                {
                  "Text": "Moderate"
                },
                {
                  "Text": "High"
                },
                {
                  "Text": "Extreme"
                }
              ]
            },
            {
              "Id": "qs_Aggressiveness_of_firm_s_strategy",
              "Text": "16. Aggressiveness of firm's strategy",
              "Choices": [
                {
                  "Text": "None"
                },
                {
                  "Text": "Low"
                },
                {
                  "Text": "Moderate"
                },
                {
                  "Text": "High"
                },
                {
                  "Text": "Disruptive"
                }
              ]
            },
            {
              "Id": "qs_Firm_s_product_image_differentiation",
              "Text": "17. Firm's product image differentiation",
              "Choices": [
                {
                  "Text": "None"
                },
                {
                  "Text": "Low"
                },
                {
                  "Text": "Moderate"
                },
                {
                  "Text": "High"
                },
                {
                  "Text": "Drastic"
                }
              ]
            },
            {
              "Id": "qs_of_firm_s_patents_trademarks_copyrights",
              "Text": "18. # of firm's patents, trademarks, copyrights",
              "Choices": [
                {
                  "Text": "None"
                },
                {
                  "Text": "Below Average"
                },
                {
                  "Text": "Average"
                },
                {
                  "Text": "Above Average"
                },
                {
                  "Text": "High (industry leader)"
                }
              ]
            },
            {
              "Id": "qs_Quality_of_firm_s_products",
              "Text": "19. Quality of firm's products",
              "Choices": [
                {
                  "Text": "Poor"
                },
                {
                  "Text": "Low"
                },
                {
                  "Text": "Industry Average"
                },
                {
                  "Text": "Above Average"
                },
                {
                  "Text": "Industry Leader"
                }
              ]
            },
            {
              "Id": "qs_Firm_s_Marketing_development_focus",
              "Text": "20. Firm's Marketing development focus",
              "Choices": [
                {
                  "Text": "Existing products/existing customers"
                },
                {
                  "Text": "Existing products/ new customers"
                },
                {
                  "Text": "New products/existing customers"
                },
                {
                  "Text": "New products/new customers"
                },
                {
                  "Text": "New products/new markets"
                }
              ]
            },
            {
              "Id": "qs_Firm_s_brand_equity",
              "Text": "21. Firm's brand equity",
              "Choices": [
                {
                  "Text": "Poor"
                },
                {
                  "Text": "Low"
                },
                {
                  "Text": "Average"
                },
                {
                  "Text": "High"
                },
                {
                  "Text": "Exceptional"
                }
              ]
            },
            {
              "Id": "qs_Firm_s_Level_of_Customer_Service",
              "Text": "22. Firm's Level of Customer Service",
              "Choices": [
                {
                  "Text": "Poor"
                },
                {
                  "Text": "Low"
                },
                {
                  "Text": "Industry Average"
                },
                {
                  "Text": "Above Average"
                },
                {
                  "Text": "Industry Leader"
                }
              ]
            },
            {
              "Id": "qs_Performance_of_firm_s_Products",
              "Text": "23. Performance of firm's Products",
              "Choices": [
                {
                  "Text": "Poor"
                },
                {
                  "Text": "Low"
                },
                {
                  "Text": "Industy Average"
                },
                {
                  "Text": "Above Average"
                },
                {
                  "Text": "Industry Leader"
                }
              ]
            },
            {
              "Id": "qs_Growth_in_Market_Share",
              "Text": "24. Growth in Market Share",
              "Choices": [
                {
                  "Text": "Declining"
                },
                {
                  "Text": "Stagnant"
                },
                {
                  "Text": "<5%"
                },
                {
                  "Text": ">5% - 8%"
                },
                {
                  "Text": "8%>"
                }
              ]
            },
            {
              "Id": "qs_Reliability_of_firm_s_products",
              "Text": "25. Reliability of firm's products",
              "Choices": [
                {
                  "Text": "Poor"
                },
                {
                  "Text": "Low"
                },
                {
                  "Text": "Industry Average"
                },
                {
                  "Text": "Above Average"
                },
                {
                  "Text": "Industry Leader"
                }
              ]
            },
            {
              "Id": "qs_Firm_s_Market_Share",
              "Text": "26. Firm's Market Share",
              "Choices": [
                {
                  "Text": "Declining"
                },
                {
                  "Text": "Stagnant"
                },
                {
                  "Text": "<5%"
                },
                {
                  "Text": ">5% - 8%"
                },
                {
                  "Text": "8%>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "Id": "catFuture_Prospects_of_Industry",
      "Title": "Future Prospects of Industry",
      "Description": "Future Prospects of Industry",
      "SubCategories": [
        {
          "Id": "subFuture_Prospects_of_the_Industry",
          "Title": "Future Prospects of the Industry",
          "Description": "Future Prospects of Industry (1-5)",
          "Questions": [
            {
              "Id": "qs_Market_Growth_Rate",
              "Text": "1. Market Growth Rate",
              "Choices": [
                {
                  "Text": "Declining"
                },
                {
                  "Text": "Stagnant"
                },
                {
                  "Text": "Mature"
                },
                {
                  "Text": "G2"
                },
                {
                  "Text": "G1"
                }
              ]
            },
            {
              "Id": "qs_Market_Size",
              "Text": "2. Market Size",
              "Choices": [
                {
                  "Text": "Declining"
                },
                {
                  "Text": "Low"
                },
                {
                  "Text": "Low"
                },
                {
                  "Text": "Moderate"
                },
                {
                  "Text": "High"
                }
              ]
            },
            {
              "Id": "qs_Level_of_Demand_Saturation",
              "Text": "3. Level of Demand Saturation",
              "Choices": [
                {
                  "Text": "Very High"
                },
                {
                  "Text": "High"
                },
                {
                  "Text": "Moderate"
                },
                {
                  "Text": "Low"
                },
                {
                  "Text": "Very Low"
                }
              ]
            },
            {
              "Id": "qs_Demand_Variability",
              "Text": "4. Demand Variability",
              "Choices": [
                {
                  "Text": "Very High"
                },
                {
                  "Text": "High"
                },
                {
                  "Text": "Moderate"
                },
                {
                  "Text": "Low"
                },
                {
                  "Text": "Very low"
                }
              ]
            },
            {
              "Id": "qs_Industry_profitability",
              "Text": "5. Industry profitability",
              "Choices": [
                {
                  "Text": "None"
                },
                {
                  "Text": "Low"
                },
                {
                  "Text": "Moderate"
                },
                {
                  "Text": "High"
                },
                {
                  "Text": "Very High"
                }
              ]
            },
            {
              "Id": "qs_Frequency_of_new_products_in_industry",
              "Text": "6. Frequency of new products in industry",
              "Choices": [
                {
                  "Text": "None"
                },
                {
                  "Text": "Low"
                },
                {
                  "Text": "Moderate"
                },
                {
                  "Text": "High"
                },
                {
                  "Text": "Very High"
                }
              ]
            },
            {
              "Id": "qs_Length_of_product_life_cycle",
              "Text": "7. Length of product life cycle",
              "Choices": [
                {
                  "Text": "Very Long (10 yrs of more)"
                },
                {
                  "Text": "Long (7 - 10yrs)"
                },
                {
                  "Text": "Moderate (3-7yrs)"
                },
                {
                  "Text": "Short (1-3yrs)"
                },
                {
                  "Text": "Very Short ( less than 1 yr)"
                }
              ]
            },
            {
              "Id": "qs_Forced_product_obsolescence",
              "Text": "8. Forced product obsolescence",
              "Choices": [
                {
                  "Text": "Extreme"
                },
                {
                  "Text": "Very High"
                },
                {
                  "Text": "High"
                },
                {
                  "Text": "Moderate"
                },
                {
                  "Text": "Low"
                }
              ]
            },
            {
              "Id": "qs_Industry_Rivalry",
              "Text": "9. Industry Rivalry",
              "Choices": [
                {
                  "Text": "Many"
                },
                {
                  "Text": "High"
                },
                {
                  "Text": "Moderate"
                },
                {
                  "Text": "Oligopoly"
                },
                {
                  "Text": "Monopoly"
                }
              ]
            },
            {
              "Id": "qs_Barriers_to_Entry",
              "Text": "10. Barriers to Entry",
              "Choices": [
                {
                  "Text": "Low"
                },
                {
                  "Text": "Moderate"
                },
                {
                  "Text": "Moderate"
                },
                {
                  "Text": "High"
                },
                {
                  "Text": "High"
                }
              ]
            },
            {
              "Id": "qs_Global_opportunities",
              "Text": "11. Global opportunities",
              "Choices": [
                {
                  "Text": "None"
                },
                {
                  "Text": "Low"
                },
                {
                  "Text": "Moderate"
                },
                {
                  "Text": "High"
                },
                {
                  "Text": "Very High"
                }
              ]
            },
            {
              "Id": "qs_Political_Social_impact_on_industry",
              "Text": "12. Political/Social impact on industry",
              "Choices": [
                {
                  "Text": "Very High"
                },
                {
                  "Text": "High"
                },
                {
                  "Text": "Moderate"
                },
                {
                  "Text": "Low"
                },
                {
                  "Text": "Very Low"
                }
              ]
            },
            {
              "Id": "qs_Environmental_impact_on_industry",
              "Text": "13. Environmental impact on industry",
              "Choices": [
                {
                  "Text": "Very High"
                },
                {
                  "Text": "High"
                },
                {
                  "Text": "Moderate"
                },
                {
                  "Text": "Low"
                },
                {
                  "Text": "Very Low"
                }
              ]
            },
            {
              "Id": "qs_Macro_environmental_impact_on_industry",
              "Text": "14. Macro-environmental impact on industry",
              "Choices": [
                {
                  "Text": "Very High"
                },
                {
                  "Text": "High"
                },
                {
                  "Text": "Moderate"
                },
                {
                  "Text": "Low"
                },
                {
                  "Text": "Very low"
                }
              ]
            },
            {
              "Id": "qs_Rate_of_Technological_innovation",
              "Text": "15. Rate of Technological innovation",
              "Choices": [
                {
                  "Text": "Very Low"
                },
                {
                  "Text": "Low"
                },
                {
                  "Text": "Moderate"
                },
                {
                  "Text": "High"
                },
                {
                  "Text": "Very High"
                }
              ]
            },
            {
              "Id": "qs_Threat_to_growth_and_profitability",
              "Text": "16. Threat to growth and profitability",
              "Choices": [
                {
                  "Text": "Very High"
                },
                {
                  "Text": "High"
                },
                {
                  "Text": "Moderate"
                },
                {
                  "Text": "Low"
                },
                {
                  "Text": "Very low"
                }
              ]
            },
            {
              "Id": "qs_Is_the_need_of_the_consumer_still_relevent",
              "Text": "17. Is the need of the consumer still relevent?",
              "Choices": [
                {
                  "Text": "No"
                },
                {
                  "Text": "Diminishing need"
                },
                {
                  "Text": "Need is shifting"
                },
                {
                  "Text": "High"
                },
                {
                  "Text": "Extreme"
                }
              ]
            },
            {
              "Id": "qs_GDP_Growth_Prospects",
              "Text": "18. GDP Growth Prospects",
              "Choices": [
                {
                  "Text": "Negative"
                },
                {
                  "Text": "Stagnant"
                },
                {
                  "Text": "0.01"
                },
                {
                  "Text": "1-3%"
                },
                {
                  "Text": "4>%"
                }
              ]
            },
            {
              "Id": "qs_Inflation_Rate",
              "Text": "19. Inflation Rate",
              "Choices": [
                {
                  "Text": ">10%"
                },
                {
                  "Text": "6-9%"
                },
                {
                  "Text": "3-5%"
                },
                {
                  "Text": "Low"
                },
                {
                  "Text": "Very Low"
                }
              ]
            },
            {
              "Id": "qs_Technological_impact_on_industry",
              "Text": "18. Technological impact on industry",
              "Choices": [
                {
                  "Text": "Very High"
                },
                {
                  "Text": "High"
                },
                {
                  "Text": "Moderate"
                },
                {
                  "Text": "Low"
                },
                {
                  "Text": "Very Low"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}